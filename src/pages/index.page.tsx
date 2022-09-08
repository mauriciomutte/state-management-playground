import { ReactElement, useMemo, useState } from 'react';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
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

const getComponentToRender = (state: AuthStates) => {
	const componentToRender: StateComponentsType = {
		login: SignIn,
		signUp: SignUp,
		oneTimePassword: OneTimePassword,
		resetPassword: ResetPassword,
	};

	return componentToRender[state];
};

const Home: NextPageWithLayout = () => {
	const [currentState, setCurrentState] = useState<AuthStates>('login');

	const handleChangeState = (state: AuthStates) => setCurrentState(state);

	const ComponentToRender = useMemo(
		() => getComponentToRender(currentState),
		[currentState]
	);

	return <ComponentToRender onStateChange={handleChangeState} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
