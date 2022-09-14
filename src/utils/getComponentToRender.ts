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

const RenderNothing = () => null;

export const getComponentToRender = (state: AuthStates) => {
	switch (state) {
		case 'login':
			return SignIn;
		case 'signUp':
			return SignUp;
		case 'oneTimePassword':
			return OneTimePassword;
		case 'resetPassword':
			return ResetPassword;
		default:
			console.warn(`Unhandled State value`);
			return RenderNothing;
	}
};
