'use client';

import useOnboardingModal from '@/hooks/useOnboardingModal';
import Modal from './Modal';
import { useCallback, useState } from 'react';
import Button from '../../molecules/Button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../molecules/Input';
import DropdownSelect from '../../molecules/DropdownSelect';
import MultipleDropdownSelect from '../../molecules/MultipleDropdownSelect';
import { useRouter } from 'next/navigation';

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
  ];

  const educations = [
    { value: 'smp', label: 'Sekolah Menengah Pertama (SMP)' },
    { value: 'sma', label: 'Sekolah Menengah Atas (SMA)' },
    { value: 'sarjana', label: 'Sarjana (S1)' },
    { value: 'lainnya', label: 'Lainnya' },
  ];

  const topics = [
    { value: 'umum', label: '🌏 Umum' },
    { value: 'olahraga', label: '🎾 Olahraga' },
    { value: 'senimusik', label: '🎵 Seni & Musik' },
    { value: 'kesehatan', label: '🏥 Kesehatan' },
    { value: 'teknologi', label: '💻 Teknologi' },
    { value: 'keuangan', label: '💹 Keuangan' },
    { value: 'politik', label: '🏛️ Politik' },
    { value: 'lainnya', label: '📰 Lainnya' },
  ];

  const locations = [
    { value: 'jabodetabek', label: 'Jabodetabek' },
    { value: 'jawabarat', label: 'Jawa Barat' },
    { value: 'jawatengah', label: 'Jawa Tengah' },
    { value: 'jawatimur', label: 'Jawa Timur' },
    { value: 'sumatera', label: 'Sumatera' },
    { value: 'kalimantan', label: 'Kalimantan' },
    { value: 'sulawesi', label: 'Sulawesi' },
    { value: 'bali', label: 'Bali' },
    { value: 'nusatenggara', label: 'Nusa Tenggara Timur / Barat (NTT/B)' },
    { value: 'maluku', label: 'Maluku' },
    { value: 'papua', label: 'Papua' },
    { value: 'luarnegeri', label: 'Luar Negeri' },
    { value: 'lainnya', label: 'Lainnya' },
  ];

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
  };

  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(data);
    onboardingModal.onClose();
    router.replace('/');
  };

  let body = [
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
            onChange={value => setCustomValue('role', value)}
            options={roles}
          />
        </div>

        <div className="space-y-2">
          <h6>Aku sedang/telah menempuh pendidikan...</h6>
          <DropdownSelect
            placholder="Riwayat Pendidikan"
            onChange={value => setCustomValue('education', value)}
            options={educations}
          />
        </div>
        <div className="space-y-2">
          <h6>Topik favoritku adalah...</h6>
          <MultipleDropdownSelect
            placholder="Silahkan pilih sebanyaknya"
            onChange={value => {
              setCustomValue('topic', value);
            }}
            options={topics}
          />
        </div>
        <div className="space-y-2">
          <h6>Aku saat ini tinggal di daerah...</h6>
          <DropdownSelect
            placholder="Pilih lokasi"
            onChange={value => setCustomValue('location', value)}
            options={locations}
            maxHeight={100}
          />
        </div>
        <div className="space-y-2">
          <h6>Aku tertarik menggunakan Lexica karena...</h6>
          <Input
            id="motivation"
            label="Silahkan cerita sebebasnya 😃"
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>
      <Button label="Simpan dan Lanjut" onClick={handleSubmit(onSubmit)} />
    </div>,
  ];

  return (
    <Modal
      isOpen={true}
      title="Selamat datang di Lexica!"
      onClose={onboardingModal.onClose}
      preventClose
      body={body[step]}
    />
  );
};

export default OnboardingModal;
