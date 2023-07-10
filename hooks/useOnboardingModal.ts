import { create } from "zustand";

interface OnboardingModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useOnboardingModal = create<OnboardingModalStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
    document.body.classList.add("overflow-hidden");
  },
  onClose: () => {
    set({ isOpen: false });
    document.body.classList.remove("overflow-hidden");
  },
}));

export default useOnboardingModal;
