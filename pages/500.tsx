import Link from 'next/link';

export default function Custom500() {
	return (
		<div className={`flex flex-col text-center`}>
			<span>🛑 There was an error on the server 🛑</span>
			<Link href="/">Go Home</Link>
		</div>
	);
}
