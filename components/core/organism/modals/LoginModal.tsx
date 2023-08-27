"use client";

import { BsGoogle } from "react-icons/bs";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./Modal";
import Button from "../../molecules/Button";
import Image from "next/image";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "react-toastify";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const { login, user } = useAuth();

  const body = (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-[30dvh] bg-primary-500 rounded-xl overflow-hidden">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          quality={100}
          sizes="(max-width: 1720px) 100vw, (max-width: 1400pxpx) 50vw, 33vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          className="group-hover:scale-110 transition"
        />
      </div>
      <div className="flex justify-center">
        <GoogleLogin
          type="standard"
          size="large"
          shape="pill"
          theme="outline"
          width="100px"
          locale="id"
          useOneTap={false}
          auto_select={false}
          onSuccess={(response) => {
            login({ googleToken: response.credential });
          }}
          text="signin_with"
          context="signin"
          onError={() => {
            toast.error("Something went wrong");
          }}
        />
      </div>
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
