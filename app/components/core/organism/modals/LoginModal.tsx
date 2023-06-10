'use client';

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./_index";

const LoginModal = () => {
    const loginModal = useLoginModal();

    return (
        <Modal
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Hello World'
            onClose={loginModal.onClose}
            onSubmit={() => { }}
        />
    );
}

export default LoginModal;