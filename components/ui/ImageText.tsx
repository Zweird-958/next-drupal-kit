import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { IMAGE_URL } from '../../lib/constants';
import { GradientPlaceholder } from '../grid';

type Props = {
	image?: string;
	alt: string;
	title: string;
	reverse?: boolean;
	buttonText?: string;
	className?: string;
	href?: string;
};

const ImageText = (props: Props) => {
	const {
		image,
		alt,
		title,
		reverse,
		buttonText = 'En savoir plus',
		className,
		href,
	} = props;
	const Component = href ? Link : 'div';

	return (
		<Component
			className={twMerge(
				'flex flex-wrap md:flex-nowrap justify-between gap-16 w-[800px]',
				reverse && 'flex-col-reverse md:flex-row-reverse',
				className,
			)}
			href={href ?? ''}
		>
			<div className="h-72 w-full">
				{image ? (
					<Image
						src={`${IMAGE_URL}${image}`}
						alt={alt}
						isZoomed
						classNames={{
							wrapper: 'min-w-full min-h-full',
							img: 'object-cover h-72 w-full',
						}}
					/>
				) : (
					<GradientPlaceholder />
				)}
			</div>

			<div className="w-full text-center flex flex-col gap-4 justify-between">
				<div className="flex items-center justify-center">
					{/* <DropIcon reverse /> */}
					<h2 className="text-2xl">{title}</h2>
					{/* <DropIcon /> */}
				</div>

				<div>{description}</div>
				<Button color="primary" className="bg-primary-500" type={null}>
					{buttonText}
				</Button>
			</div>
		</Component>
	);
};

export default ImageText;
