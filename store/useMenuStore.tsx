import {create} from "zustand";
import { persist } from "zustand/middleware";

interface MenuStore {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMobileMenu: () => void;
}

export const useMenuStore = create(
  persist<MenuStore>(
    (set) => ({
      isOpen: false,
      toggleMenu: () =>
        set((state) => ({
          isOpen: !state.isOpen,
        })),
      closeMobileMenu: () =>
        set(() => ({
          isOpen: false,
        })),
    }),
    { name: "menu-store" }
  )
);