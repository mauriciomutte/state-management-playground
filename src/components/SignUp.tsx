import Link from '@/components/Link';
import type { AuthStates } from '@/pages';

type SignUpProps = {
	onStateChange: (state: AuthStates) => void;
};

const SignUp = ({ onStateChange }: SignUpProps) => {
	return (
		<>
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
				Sign Up
			</h1>

			<Link onClick={() => onStateChange('login')}>Back to login</Link>
		</>
	);
};

export default SignUp;
