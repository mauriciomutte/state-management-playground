import create from 'zustand';

import { AuthStates } from '@/utils/getComponentToRender';

type AuthStoreType = {
	state: AuthStates;
	errorMessage?: string;
	changeState: (currentState: AuthStates) => void;
	setErrorMessage: (message: string) => void;
};

export const useAuthStore = create<AuthStoreType>((set) => ({
	state: 'login',
	errorMessage: undefined,
	changeState: (currentState) => set(() => ({ state: currentState })),
	setErrorMessage: (message) => set(() => ({ errorMessage: message })),
}));
