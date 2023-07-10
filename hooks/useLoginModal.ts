import { create } from 'zustand';

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModal = create<LoginModalStore>(set => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
    document.body.classList.add('overflow-hidden');
  },
  onClose: () => {
    set({ isOpen: false });
    document.body.classList.remove('overflow-hidden');
  },
}));

export default useLoginModal;
