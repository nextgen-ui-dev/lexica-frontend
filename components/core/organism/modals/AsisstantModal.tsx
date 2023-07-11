"use client";

import useAsisstantModal from "@/hooks/useAssistantModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextArea from "../../molecules/TextArea";
import Button from "../../molecules/Button";
import { useAssistantPrompt } from "@/hooks";
import { Bars } from "react-loader-spinner";
import { RiCustomerServiceLine } from "react-icons/ri";
const AssistantModal = () => {
  const assistantModal = useAsisstantModal();
  const { data, mutate: prompt, isLoading } = useAssistantPrompt();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    prompt(formData.prompt);
  };

  const body = (
    <div className="flex flex-col gap-4">
      <TextArea
        id="prompt"
        label="Ada yang bisa kami bantu?"
        register={register}
        errors={errors}
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
        label="Tanyakan pada kami"
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      isOpen={assistantModal.isOpen}
      title="Lexica AI: Asisten Membaca"
      onClose={assistantModal.onClose}
      body={body}
    />
  );
};

export default AssistantModal;
