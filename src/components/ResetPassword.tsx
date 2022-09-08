import Link from '@/components/Link';
import type { AuthStates } from '@/pages';

type ResetPasswordProps = {
	onStateChange: (state: AuthStates) => void;
};

const ResetPassword = ({ onStateChange }: ResetPasswordProps) => {
	return (
		<>
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
				Reset Password
			</h1>

			<Link onClick={() => onStateChange('login')}>Back to login</Link>
		</>
	);
};

export default ResetPassword;
