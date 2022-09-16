import { ReactElement, useMemo } from 'react';
import Head from 'next/head';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
import { AuthStates, getComponentToRender } from '@/utils/getComponentToRender';
import { useAuthStore } from '@/pages/withZustand/stores/authStore';
import Alert from '@/components/Alert';

const LoginZustand: NextPageWithLayout = () => {
	const { state, errorMessage, changeState } = useAuthStore();

	const handleChangeState = (state: AuthStates) => changeState(state);

	const ComponentToRender = useMemo(() => getComponentToRender(state), [state]);

	return (
		<>
			<Head>
				<title>with Zustand</title>
			</Head>
			<ComponentToRender onStateChange={handleChangeState} />
			{!!errorMessage && <Alert message={errorMessage} />}
		</>
	);
};

LoginZustand.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default LoginZustand;
