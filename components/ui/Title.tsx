import { twMerge } from 'tailwind-merge';

type TitleProps = {
	children: React.ReactNode;
	as?: string | React.ComponentType<any> | React.ElementType<any>;
	className?: string;
	[key: string]: any;
};

const Title = ({
	children,
	as: Component = 'h1',
	className,
	...otherProps
}: TitleProps) => (
	<Component
		className={twMerge('text-center text-4xl font-bold', className)}
		{...otherProps}
	>
		{children}
	</Component>
);

export default Title;
