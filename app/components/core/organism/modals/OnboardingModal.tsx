"use client";

import useOnboardingModal from "@/app/hooks/useOnboardingModal";
import Modal from "./Modal";
import { useCallback, useState } from "react";
import Button from "../../molecules/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../molecules/Input";
import DropdownSelect from "../../molecules/DropdownSelect";
import MultipleDropdownSelect from "../../molecules/MultipleDropdownSelect";
import { useRouter } from "next/navigation";

enum STEPS {
    INTRODUCTION = 0,
    PROFILE = 1,
}

const OnboardingModal = () => {
    const [step, setStep] = useState(STEPS.INTRODUCTION);
    const router = useRouter();
    const onboardingModal = useOnboardingModal();

    const roles = [
        { value: 'pelajar', label: 'Guru/Dosen' },
        { value: 'pengajar', label: 'Siswa/Mahasiswa' },
        { value: 'umum', label: 'Umum' },
    ]

    const educations = [
        { value: 'smp', label: 'Sekolah Menengah Pertama (SMP)' },
        { value: 'sma', label: 'Sekolah Menengah Atas (SMA)' },
        { value: 'sarjana', label: 'Sarjana' },
        { value: 'lainnya', label: 'Lainnya' },
    ]

    const locations = [
        { value: 'jakarta', label: 'Jakarta' },
        { value: 'bogor', label: 'Bogor' },
        { value: 'depok', label: 'Depok' },
        { value: 'tanggerang', label: 'Tanggerang' },
        { value: 'Bekasi', label: 'Bekasi' },
        { value: 'lainnya', label: 'Lainnya' },
    ]

    const topics = [
        { value: 'general', label: 'General' },
        { value: 'teknologi', label: 'Teknologi' },
        { value: 'politik', label: 'Politik' },
        { value: 'pendidikan', label: 'Pendidikan' },
        { value: 'lainnya', label: 'Lainnya' },
    ]

    const handleNext = useCallback(() => {
        setStep(STEPS.PROFILE);
    }, [setStep]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        onboardingModal.onClose();
        router.replace('/');
    }

    let body = [
        (
            <div className='flex flex-col gap-4'>
                <div>
                    <h4>Kami merupakan teman Anda</h4>
                    <p>Kami hadir sebagai solusi digital untuk membantu pelajar Indonesia untuk mendapatkan akses terhadap bahan bacaan yang berkualitas serta melatih kemampuan literasi lewat tingkat kesulitan artikel yang dapat disesuaikan</p>
                </div>
                <Button
                    label="Selanjutnya"
                    onClick={handleNext}
                />
            </div>
        ),
        (
            <div className='w-full flex flex-col gap-4'>
                <div className="w-full px-1 space-y-4">
                    <div className="space-y-2">
                        <h6>Kedudukan Anda saat ini</h6>
                        <DropdownSelect
                            placholder="Pelajar/Pengajar"
                            onChange={(value) => setCustomValue('role', value)}
                            options={roles}
                        />
                    </div>
                    <div className="space-y-2">
                        <h6>Berikan kami sedikit informasi tentang motivasi Anda</h6>
                        <Input
                            id="motivation"
                            label="Ceritakan sedikit motivasi Anda"
                            register={register}
                            errors={errors}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <h6>Pendidikan Terakhir Anda</h6>
                        <DropdownSelect
                            placholder="Riwayat Pendidikan"
                            onChange={(value) => setCustomValue('education', value)}
                            options={educations}
                        />
                    </div>
                    <div className="space-y-2">
                        <h6>Topik yang anda sukai</h6>
                        <MultipleDropdownSelect
                            placholder="Beritahu kami topik-topik yang Anda sukai"
                            onChange={(value) => { setCustomValue('topic', value) }}
                            options={topics}
                        />
                    </div>
                    <div className="space-y-2">
                        <h6>Lokasi Tempat Tinggal Anda Saat Ini</h6>
                        <DropdownSelect
                            placholder="Lokasi"
                            onChange={(value) => setCustomValue('location', value)}
                            options={locations}
                            maxHeight={100}
                        />
                    </div>
                </div>
                <Button
                    label="Telusuri Lexica"
                    onClick={handleSubmit(onSubmit)}
                />
            </div>
        ),
    ];

    return (
        <Modal
            isOpen={true}
            title='Selamat datang di Lexica!'
            onClose={onboardingModal.onClose}
            preventClose
            body={body[step]}
        />
    );
}

export default OnboardingModal;