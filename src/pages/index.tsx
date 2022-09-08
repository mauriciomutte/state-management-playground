import type { NextPage } from 'next';

import SignIn from '@/components/SignIn';
import Logo from '@/components/Logo';

const Home: NextPage = () => {
	return (
		<section className="bg-gray-50">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<Logo />
				<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<SignIn />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
