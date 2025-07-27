import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="text-center gap-2 h-screen flex flex-col items-center justify-center">
			<h2 className="text-2xl font-bold text-destructive">Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/" className="underline text-blue-500">
				Return Home
			</Link>
		</div>
	);
}
