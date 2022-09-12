import { ReactElement } from 'react';

import Layout from '@/components/Layout';
import { NextPageWithLayout } from '@/pages/_app.page';

const examplesList = [
	{
		label: 'with UseState',
		link: '/withUseState',
	},
	{
		label: 'with XState',
		link: '/withXState',
	},
];

const Home: NextPageWithLayout = () => {
	return (
		<div>
			<h1 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
				Examples:
			</h1>
			<ul>
				{examplesList.map(({ label, link }) => (
					<a key={label} href={link} className=" ">
						<li className="p-4 border-b rounded hover:bg-gray-50">{label}</li>
					</a>
				))}
			</ul>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
