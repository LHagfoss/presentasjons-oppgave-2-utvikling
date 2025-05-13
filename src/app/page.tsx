import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Link
				className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-600 text-white gap-2 hover:bg-green-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
				href="/recycling-overview"
			>
				Resirkulers Dashboard
			</Link>
		</>
	);
}
