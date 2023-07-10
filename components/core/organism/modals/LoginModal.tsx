'use client';

import { BsGoogle } from 'react-icons/bs';
import useLoginModal from '@/hooks/useLoginModal';
import Modal from './Modal';
import Button from '../../molecules/Button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import useOnboardingModal from '@/hooks/useOnboardingModal';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const onboardingModal = useOnboardingModal();

  const body = (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-[30dvh] bg-primary-500 rounded-xl overflow-hidden">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
          className="group-hover:scale-110 transition"
        />
      </div>
      <Button
        label="Masuk"
        onClick={() => {
          signIn('google', { redirect: true, callbackUrl: '/onboarding' });
        }}
        icon={BsGoogle}
      />
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Masuk menggunakan Google"
      onClose={loginModal.onClose}
      body={body}
    />
  );
};

export default LoginModal;
