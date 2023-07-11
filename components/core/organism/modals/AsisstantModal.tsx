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
  const strr =
    "Literasi itu penting karena merupakan keterampilan dasar yang diperlukan dalam kehidupan sehari-hari. Literasi melibatkan kemampuan membaca, menulis, dan memahami informasi dalam berbagai bentuk, seperti teks, gambar, dan media digital. Dengan literasi yang baik, seseorang dapat mengakses, mengevaluasi, dan menggunakan informasi dengan efektif. Literasi juga memainkan peran penting dalam pengembangan diri seseorang. Dengan literasi yang kuat, seseorang dapat mengembangkan pengetahuan, keterampilan, dan pemahaman yang lebih mendalam tentang dunia di sekitarnya. Literasi memungkinkan seseorang untuk terus belajar dan berkembang sepanjang hidupnya. Selain itu, literasi juga memiliki dampak yang signifikan dalam masyarakat. Orang yang memiliki literasi yang baik memiliki peluang yang lebih baik dalam mencari pekerjaan, mengakses layanan kesehatan, dan berpartisipasi dalam kehidupan sosial dan politik. Literasi juga dapat membantu seseorang menjadi warga yang lebih aktif dan berpikir kritis, serta berkontribusi positif dalam masyarakat. Dalam era digital saat ini, literasi juga penting untuk membantu seseorang dalam mengatasi informasi yang banyak dan terkadang tidak valid. Dengan literasi yang baik, seseorang akan dapat memahami dan mengevaluasi informasi yang ditemukan di internet, serta mengidentifikasi berita palsu atau hoaks. Secara keseluruhan, literasi sangat penting dalam kehidupan kita. Dengan memiliki literasi yang baik, seseorang dapat mengembangkan diri, berpartisipasi dalam masyarakat, dan menghadapi tantangan dunia yang semakin kompleks.";
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
      title="Lexica Asisstant"
      onClose={assistantModal.onClose}
      body={body}
    />
  );
};

export default AssistantModal;
