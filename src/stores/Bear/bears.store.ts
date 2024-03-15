import { create } from "zustand";

export type Bears = "polar" | "black" | "panda";

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBears: (bears: Bears, by: number) => void;
  decreaseBears: (bears: Bears, by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 0,
  pandaBears: 0,
  polarBears: 0,

  increaseBears: (bears: Bears, by: number) =>
    set((state) => ({
      ...state,
      [`${bears}Bears`]: state[`${bears}Bears`] + by,
    })),

  decreaseBears: (bears: Bears, by: number) =>
    set((state) => ({
      ...state,
      [`${bears}Bears`]: state[`${bears}Bears`] - by,
    })),
}));
