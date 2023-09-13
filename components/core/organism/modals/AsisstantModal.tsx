"use client";

import useAsisstantModal from "@/hooks/useAssistantModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextArea from "../../molecules/TextArea";
import Button from "../../molecules/Button";
import { useAssistantPrompt } from "@/hooks";
import { Bars } from "react-loader-spinner";
import { RiCustomerServiceLine } from "react-icons/ri";
import { useAuth } from "@/contexts/AuthContext";
import { useCallback } from "react";
import useLoginModal from "@/hooks/useLoginModal";

const AssistantModal = () => {
  const assistantModal = useAsisstantModal();
  const loginModal = useLoginModal();
  const { user } = useAuth();
  const {
    data,
    mutate: prompt,
    isLoading,
    reset: resetData,
  } = useAssistantPrompt();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    prompt(formData.prompt);
  };

  const handleClose = useCallback(() => {
    reset();
    resetData();
    assistantModal.onClose();
  }, [reset, assistantModal]);

  const handleUnauthenticated = useCallback(() => {
    assistantModal.onClose();
    loginModal.onOpen();
  }, [assistantModal, loginModal]);

  const body = (
    <div className="flex flex-col gap-4">
      {!user && (
        <div className="w-full h-auto border rounded-md p-4 flex flex-col gap-2">
          <h3>Anda belum login!</h3>
          <p>
            Fitur AI Asisten ini memerlukan Anda untuk login terlebih dahulu
            agar dapat menggunakannya dengan lebih baik sesuai dengan persona
            Anda.
          </p>
          <Button label="Login" onClick={handleUnauthenticated} />
        </div>
      )}
      <TextArea
        id="prompt"
        label="Ada yang bisa kami bantu?"
        register={register}
        errors={errors}
        disabled={isLoading || !user}
        required
      />
      {isLoading && (
        <div className="w-full flex flex-col items-center gap-y-4">
          <Bars
            height="100"
            width="100"
            color="#5152ff"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h5>Mencari jawaban terbaik untukmu..</h5>
        </div>
      )}
      {data && !isLoading && (
        <div className="w-full p-5 rounded-xl border flex flex-col gap-y-4">
          <div className="flex flex-row items-center justify-start gap-x-4">
            <div className="p-2 bg-primary-300 rounded-full">
              <RiCustomerServiceLine size={20} className="text-primary-600" />
            </div>
            <p className="text-lg text-black font-semibold">{data.text}</p>
          </div>
          <p className="text-justify">{data.explanation}</p>
        </div>
      )}
      <Button
        label="Tanyakan pada asisten"
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading || !user}
      />
    </div>
  );

  return (
    <Modal
      isOpen={assistantModal.isOpen}
      title="Lexica AI: Asisten Membaca"
      onClose={handleClose}
      body={body}
    />
  );
};

export default AssistantModal;
