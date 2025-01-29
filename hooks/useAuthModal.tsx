import { create } from "zustand";

interface AuthModalStore {
    isopen: boolean;
    setOpen: () => void;
    onClose: () => void;
};

const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false, // Fixed key: isOpen instead of isopen
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
