import { create } from "zustand";

interface CollectionsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCollectionsModal = create<CollectionsModalStore>((set) => ({
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

export default useCollectionsModal;
