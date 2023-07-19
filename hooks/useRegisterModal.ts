import { create } from "zustand";

import { RegisterModalStore } from "@/interfaces";

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,

  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
