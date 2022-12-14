import { ReactElement, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import Head from 'next/head';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
import { authMachine } from '@/pages/withXState/machine';
import { AuthStates, getComponentToRender } from '@/utils/getComponentToRender';
import Alert from '@/components/Alert';

const eventsByState = {
	login: 'SIGN_IN',
	signUp: 'SIGN_UP',
	oneTimePassword: 'ONE_TIME_PASSWORD',
	resetPassword: 'RESET_PASSWORD',
	resetPasswordConfirm: 'RESET_PASSWORD_CONFIRM',
};

const LoginXState: NextPageWithLayout = () => {
	const [machineState, send] = useMachine(authMachine);

	const errorMessage = machineState.context.error;
	const currentState = machineState.value as AuthStates;

	const handleChangeState = (state: AuthStates) => {
		const eventType = eventsByState[state];

		send({ type: eventType });
	};

	const ComponentToRender = useMemo(
		() => getComponentToRender(currentState),
		[currentState]
	);

	return (
		<>
			<Head>
				<title>with XState</title>
			</Head>
			<ComponentToRender onStateChange={handleChangeState} />
			{!!errorMessage && <Alert message={errorMessage} />}
		</>
	);
};

LoginXState.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default LoginXState;
