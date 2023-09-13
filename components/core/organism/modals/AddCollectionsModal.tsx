"use client";

import React from "react";

import Button from "../../molecules/Button";
import Input from "../../molecules/Input";
import Modal from "./Modal";
import useCollectionsModal from "@/hooks/useCollectionsModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateCollections } from "@/hooks/collections/useCreateCollections";
import { useAuth } from "@/contexts/AuthContext";

const AddCollectionModal = () => {
  const { data, mutate, isLoading } = useCreateCollections();
  const { user, token } = useAuth();
  const collectionsModal = useCollectionsModal();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    const creator = user;

    // POST data
    mutate(formData.title);

    collectionsModal.onClose();
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "" });
    }
  }, [formState, reset, isSubmitSuccessful]);

  const body = (
    <div>
      <div className={`py-4`}>
        <Input
          id="title"
          label="Judul Koleksi"
          register={register}
          errors={errors}
          required
        />
      </div>
      <Button label="Simpan" onClick={handleSubmit(onSubmit)} />
    </div>
  );
  return (
    <Modal
      isOpen={collectionsModal.isOpen}
      title="Buat Koleksi Baru"
      onClose={collectionsModal.onClose}
      body={body}
    />
  );
};

export default AddCollectionModal;
