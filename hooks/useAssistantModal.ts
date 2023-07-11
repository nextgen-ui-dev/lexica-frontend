import { create } from "zustand";

interface AsisstantModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAsisstantModal = create<AsisstantModalStore>((set) => ({
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

export default useAsisstantModal;
