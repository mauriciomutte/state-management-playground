import Link from '@/components/Link';
import type { AuthStates } from '@/utils/getComponentToRender';

type ResetPasswordProps = {
	onStateChange: (state: AuthStates) => void;
};

const ResetPassword = ({ onStateChange }: ResetPasswordProps) => {
	return (
		<>
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
				Reset Password
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
				<button
					type="submit"
					className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					onClick={() => onStateChange('resetPasswordConfirm')}
				>
					Reset password
				</button>
			</form>

			<Link onClick={() => onStateChange('login')}>Back to login</Link>
		</>
	);
};

export default ResetPassword;
