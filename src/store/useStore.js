import { create } from "zustand";
import { userSlice } from "./userSlice";
import { persist } from "zustand/middleware";

export const useUserStore = create(persist((set, get) => ({
  ...userSlice(set, get)
}), { name: 'user-store', }));