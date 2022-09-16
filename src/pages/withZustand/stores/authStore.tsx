import create from 'zustand';

import { AuthStates } from '@/utils/getComponentToRender';

type AuthStoreType = {
	state: AuthStates;
	changeState: (currentState: AuthStates) => void;
};

export const useAuthStore = create<AuthStoreType>((set) => ({
	state: 'login',
	changeState: (currentState) => set(() => ({ state: currentState })),
}));
