"use client";

import React from "react";

import Button from "../../molecules/Button";
import Input from "../../molecules/Input";
import Modal from "./Modal";
import useCollections from "@/hooks/OlduseCollections";
import useCollectionsModal from "@/hooks/OlduseCollectionsModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddCollectionModal = () => {
  const collectionsState = useCollections((state) => state.collections);
  const collectionsHook = useCollections();
  const collectionsModal = useCollectionsModal();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { name } = data;
    // const creator = session?.user !== undefined ? session.user : {};
    const creator = undefined;
    const collection = {
      id: `QWERTYID${collectionsState.length + 1}`,
      name,
      creator: creator,
      articles: [],
      thumbnailUrl: "/images/no_image.png",
    };

    collectionsHook.addCollection(collection);
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
          id="name"
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
