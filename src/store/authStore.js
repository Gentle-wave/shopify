import {create} from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  login: (email, password) => {
    // Simulate login
    set({ user: { email } });
  },
  logout: () => set({ user: null }),
  register: (email, password) => {
    // Simulate register
    set({ user: { email } });
  },
}));
