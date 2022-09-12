import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import OneTimePassword from '@/components/OneTimePassword';
import ResetPassword from '@/components/ResetPassword';

type StateComponentsType = {
	login: (onStateChange: any) => JSX.Element;
	signUp: (onStateChange: any) => JSX.Element;
	oneTimePassword: (onStateChange: any) => JSX.Element;
	resetPassword: (onStateChange: any) => JSX.Element;
};

export type AuthStates = keyof StateComponentsType;

export const getComponentToRender = (state: AuthStates) => {
	const componentToRender: StateComponentsType = {
		login: SignIn,
		signUp: SignUp,
		oneTimePassword: OneTimePassword,
		resetPassword: ResetPassword,
	};

	return componentToRender[state];
};
