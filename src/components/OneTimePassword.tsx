import Link from '@/components/Link';
import type { AuthStates } from '@/utils/getComponentToRender';

type OneTimePasswordProps = {
	onStateChange: (state: AuthStates) => void;
};

const OneTimePassword = ({ onStateChange }: OneTimePasswordProps) => {
	return (
		<>
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
				One Time Password
			</h1>

			<Link onClick={() => onStateChange('login')}>Back to login</Link>
		</>
	);
};

export default OneTimePassword;
