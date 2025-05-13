'use client';

import { useState, useEffect } from 'react';

// Typer for datamodellen
type RecyclingEntry = {
	id: string;
	itemCount: number;
	timestamp: string;
	itemType: string;
	container: {
		location: string;
		area: string;
	};
};

type User = {
	id: string;
	name: string;
	barcode: string;
	recyclingEntries: RecyclingEntry[];
};

// Komponent som demonstrerer henting av data fra API
export default function RecyclingData() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Funksjon for å hente data fra API
	const fetchRecyclingData = async () => {
		try {
			setLoading(true);
			setError(null);

			// Hent data fra API
			const response = await fetch('/api/recycling');

			if (!response.ok) {
				throw new Error(`API-feil: ${response.status}`);
			}

			const data = await response.json();
			setUser(data.user);
		} catch (err) {
			console.error('Feil ved henting av data:', err);
			setError('Kunne ikke hente resirkuleringsdata. Prøv igjen senere.');
		} finally {
			setLoading(false);
		}
	};

	// Hent data når komponenten lastes
	useEffect(() => {
		fetchRecyclingData();
	}, []);

	// Beregn statistikk basert på data
	const calculateStatistics = () => {
		if (!user) return null;

		const totalItems = user.recyclingEntries.reduce(
			(total, entry) => total + entry.itemCount,
			0
		);

		const totalGlass = user.recyclingEntries
			.filter((entry) => entry.itemType === 'glass')
			.reduce((total, entry) => total + entry.itemCount, 0);

		const totalMetal = user.recyclingEntries
			.filter((entry) => entry.itemType === 'metall')
			.reduce((total, entry) => total + entry.itemCount, 0);

		return { totalItems, totalGlass, totalMetal };
	};

	const stats = calculateStatistics();

	return (
		<div className="bg-white rounded-lg shadow-md p-6 mb-6">
			<h2 className="text-xl font-semibold mb-4">Kobling til database</h2>

			{loading && (
				<div className="text-center p-4">
					<p>Henter data fra databasen...</p>
				</div>
			)}

			{error && (
				<div className="text-center p-4 text-red-500">
					<p>{error}</p>
					<button
						className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
						onClick={fetchRecyclingData}
					>
						Prøv igjen
					</button>
				</div>
			)}

			{!loading && !error && user && (
				<div>
					<p className="mb-4">
						Data hentet for bruker: <strong>{user.name}</strong>
					</p>

					{stats && (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
							<div className="bg-blue-50 p-4 rounded-lg text-center">
								<div className="text-3xl font-bold text-blue-600">
									{stats.totalItems}
								</div>
								<div className="text-sm text-gray-600">
									Totalt antall enheter
								</div>
							</div>
							<div className="bg-blue-50 p-4 rounded-lg text-center">
								<div className="text-3xl font-bold text-blue-600">
									{stats.totalGlass}
								</div>
								<div className="text-sm text-gray-600">Glass</div>
							</div>
							<div className="bg-blue-50 p-4 rounded-lg text-center">
								<div className="text-3xl font-bold text-blue-600">
									{stats.totalMetal}
								</div>
								<div className="text-sm text-gray-600">Metall</div>
							</div>
						</div>
					)}

					<div className="bg-gray-50 p-4 rounded-lg">
						<h3 className="font-medium mb-2">Implementasjonsdetaljer:</h3>
						<ul className="list-disc pl-5 space-y-1 text-sm">
							<li>
								API-endepunkt:{' '}
								<code className="bg-gray-200 px-1 rounded">/api/recycling</code>
							</li>
							<li>Datamodell: Prisma med PostgreSQL</li>
							<li>Autentisering: Bruker-ID fra sesjon</li>
							<li>Datahenting: React useEffect og fetch API</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
