import Link from '@/components/Link';
import type { AuthStates } from '@/utils/getComponentToRender';

type SignInProps = {
	onStateChange: (state: AuthStates) => void;
};

const SignIn = ({ onStateChange }: SignInProps) => {
	const handleChange = (state: AuthStates) => onStateChange(state);

	return (
		<>
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
				Sign in to your account
			</h1>

			<form className="space-y-4 md:space-y-6" action="#">
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Your email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
						placeholder="name@company.com"
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					/>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-start">
						<div className="flex items-center h-5">
							<input
								id="remember"
								aria-describedby="remember"
								type="checkbox"
								className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
							/>
						</div>
						<div className="ml-3 text-sm">
							<label htmlFor="remember" className="text-gray-500">
								Remember me
							</label>
						</div>
					</div>
					<Link onClick={() => handleChange('resetPassword')}>
						Forgot password?
					</Link>
				</div>
				<button
					type="submit"
					className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					Sign in
				</button>
			</form>

			<p className="text-sm font-light text-gray-500">
				Sign in using{' '}
				<Link onClick={() => handleChange('oneTimePassword')}>
					one time password
				</Link>
			</p>
			<p className="text-sm font-light text-gray-500 !mt-2">
				Don’t have an account yet?{' '}
				<Link onClick={() => handleChange('signUp')}>Sign up</Link>
			</p>
		</>
	);
};

export default SignIn;
