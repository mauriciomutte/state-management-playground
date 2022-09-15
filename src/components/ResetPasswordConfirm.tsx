import Link from '@/components/Link';
import type { AuthStates } from '@/utils/getComponentToRender';

type ResetPasswordProps = {
	onStateChange: (state: AuthStates) => void;
};

const ResetPasswordConfirm = ({ onStateChange }: ResetPasswordProps) => {
	return (
		<>
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
				Check your email
			</h1>

			<p>We have sent a password recover instructions to your email</p>

			<Link onClick={() => onStateChange('login')}>Back to login</Link>
		</>
	);
};

export default ResetPasswordConfirm;
