import { ReactElement, useMemo } from 'react';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import OneTimePassword from '@/components/OneTimePassword';
import ResetPassword from '@/components/ResetPassword';
import { AuthStates } from '@/pages/index.page';
import { authMachine } from '@/pages/withXState/machine';
import { useMachine } from '@xstate/react';

const getMachineEvents = (event: AuthStates) => {
	const events = {
		login: 'SIGN_IN',
		signUp: 'SIGN_UP',
		oneTimePassword: 'ONE_TIME_PASSWORD',
		resetPassword: 'RESET_PASSWORD',
	};

	return events[event];
};

const getComponentToRender = (state: AuthStates) => {
	const componentToRender = {
		login: SignIn,
		signUp: SignUp,
		oneTimePassword: OneTimePassword,
		resetPassword: ResetPassword,
	};

	return componentToRender[state];
};

const LoginXState: NextPageWithLayout = () => {
	const [machineState, send] = useMachine(authMachine);

	const currentState = machineState.value as AuthStates;

	const handleChangeState = (state: AuthStates) => {
		const eventType = getMachineEvents(state);

		send({ type: eventType });
	};

	const ComponentToRender = useMemo(
		() => getComponentToRender(currentState),
		[currentState]
	);

	return <ComponentToRender onStateChange={handleChangeState} />;
};

LoginXState.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default LoginXState;
