/* eslint-disable react/jsx-key */
"use client";

import useOnboardingModal from "@/hooks/useOnboardingModal";
import Modal from "./Modal";
import { useCallback, useState } from "react";
import Button from "../../molecules/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import DropdownSelect from "../../molecules/DropdownSelect";
import MultipleDropdownSelect from "../../molecules/MultipleDropdownSelect";
import { useRouter } from "next/navigation";
import { useCategories } from "@/hooks/useCategories";
import { axiosAuth } from "@/libs/axios";
import Cookies from "js-cookie";

enum STEPS {
  INTRODUCTION = 0,
  PROFILE = 1,
}

const OnboardingModal = () => {
  const [step, setStep] = useState(STEPS.INTRODUCTION);
  const router = useRouter();
  const { data } = useCategories();
  const onboardingModal = useOnboardingModal();

  const roles = [
    { value: "pelajar", label: "Guru/Dosen" },
    { value: "pengajar", label: "Siswa/Mahasiswa" },
    { value: "umum", label: "Umum" },
  ];

  const educations = [
    { value: "smp", label: "Sekolah Menengah Pertama (SMP)" },
    { value: "sma", label: "Sekolah Menengah Atas (SMA)" },
    { value: "sarjana", label: "Sarjana (S1)" },
    { value: "lainnya", label: "Lainnya" },
  ];

  const topics = data
    ? data.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    : [];

  const handleNext = useCallback(() => {
    setStep(STEPS.PROFILE);
  }, [setStep]);

  const { handleSubmit, setValue } = useForm();

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await axiosAuth.put(
      `/auth/onboarding`,
      {
        role: data.role,
        education_level: data.education,
        interest_ids: data.topics,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      },
    );
    onboardingModal.onClose();
    router.replace("/");
  };

  const body = [
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="mb-2 md:mb-3">
          Kami akan membawamu ke petualangan membaca 📖✈️
        </h4>
        <p>Manfaat-manfaat ini menunggumu...</p>
        <li className="font-hind font-normal text-sm text-slate-500">
          Cari artikel berkualitas
        </li>
        <li className="font-hind font-normal text-sm text-slate-500">
          Atur kesulitan bacaan sesuai kemampuan
        </li>
        <li className="font-hind font-normal text-sm text-slate-500">
          Berpetualang membaca dengan teman-teman
        </li>
        <li className="font-hind font-normal text-sm text-slate-500">
          Susun artikel sesuai topik lewat fitur Koleksi
        </li>
        <li className="font-hind font-normal text-sm text-slate-500">
          Pantau perkembangan membaca di fitur Statistik
        </li>
      </div>
      <Button label="Mulai Petualangan ✈️" onClick={handleNext} />
    </div>,
    <div className="w-full flex flex-col gap-4">
      <div className="w-full px-1 space-y-4">
        <div className="space-y-2">
          <h6>Aku merupakan seorang...</h6>
          <DropdownSelect
            placholder="Pelajar/Pengajar"
            onChange={(value) => setCustomValue("role", value)}
            options={roles}
          />
        </div>

        <div className="space-y-2">
          <h6>Aku sedang/telah menempuh pendidikan...</h6>
          <DropdownSelect
            placholder="Riwayat Pendidikan"
            onChange={(value) => setCustomValue("education", value)}
            options={educations}
          />
        </div>
        <div className="space-y-2">
          <h6>Topik favoritku adalah...</h6>
          <MultipleDropdownSelect
            placholder="Silahkan pilih sebanyaknya"
            onChange={(value) => {
              setCustomValue("topics", value);
            }}
            options={topics}
          />
        </div>
      </div>
      <Button label="Simpan dan Lanjut" onClick={handleSubmit(onSubmit)} />
    </div>,
  ];

  return (
    <Modal
      isOpen={onboardingModal.isOpen}
      title="Selamat datang di Lexica!"
      onClose={onboardingModal.onClose}
      body={body[step]}
    />
  );
};

export default OnboardingModal;
