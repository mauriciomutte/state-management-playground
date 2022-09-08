import React from 'react';

type LinkProps = {
	children: string;
	onClick: () => void;
};

const Link = ({ children, onClick }: LinkProps) => {
	return (
		<button
			className="text-primary-600 text-sm font-medium hover:underline"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Link;
