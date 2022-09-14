import { createMachine } from 'xstate';

export const authMachine = createMachine({
	id: 'authMachine',
	initial: 'login',
	predictableActionArguments: true,
	states: {
		login: {
			on: {
				SIGN_UP: 'signUp',
				RESET_PASSWORD: 'resetPassword',
				ONE_TIME_PASSWORD: 'oneTimePassword',
			},
		},
		signUp: {
			on: { SIGN_IN: 'login' },
		},
		resetPassword: {
			on: { SIGN_IN: 'login' },
		},
		oneTimePassword: {
			on: { SIGN_IN: 'login' },
		},
	},
});
