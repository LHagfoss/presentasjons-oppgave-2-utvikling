'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import RecyclingData from './RecyclingData';

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

// Eksempeldata for demonstrasjon
const mockUser: User = {
	id: '1',
	name: 'Ola Nordmann',
	barcode: '123456789',
	recyclingEntries: [
		{
			id: '1',
			itemCount: 5,
			timestamp: '2025-04-15T14:30:00Z',
			itemType: 'glass',
			container: {
				location: 'Storgata 1',
				area: 'Sentrum',
			},
		},
		{
			id: '2',
			itemCount: 3,
			timestamp: '2025-04-10T10:15:00Z',
			itemType: 'metall',
			container: {
				location: 'Parkveien 8',
				area: 'Vest',
			},
		},
		{
			id: '3',
			itemCount: 7,
			timestamp: '2025-04-05T16:45:00Z',
			itemType: 'glass',
			container: {
				location: 'Sjøgata 12',
				area: 'Øst',
			},
		},
		{
			id: '4',
			itemCount: 2,
			timestamp: '2025-04-01T09:20:00Z',
			itemType: 'metall',
			container: {
				location: 'Storgata 1',
				area: 'Sentrum',
			},
		},
	],
};

// Hjelpefunksjon for å formatere dato
const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString('nb-NO', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
};

// Hjelpefunksjon for å beregne total antall enheter
const calculateTotalItems = (entries: RecyclingEntry[]): number => {
	return entries.reduce((total, entry) => total + entry.itemCount, 0);
};

// Hjelpefunksjon for å beregne antall enheter per type
const calculateItemsByType = (
	entries: RecyclingEntry[],
	type: string
): number => {
	return entries
		.filter((entry) => entry.itemType === type)
		.reduce((total, entry) => total + entry.itemCount, 0);
};

export default function RecyclingOverview() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	// Simulerer henting av data fra API
	useEffect(() => {
		// I en ekte app ville vi hente data fra API her
		setTimeout(() => {
			setUser(mockUser);
			setLoading(false);
		}, 1000);
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-xl">Laster inn...</div>
			</div>
		);
	}

	if (!user) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-xl">Kunne ikke laste brukerdata</div>
			</div>
		);
	}

	const totalItems = calculateTotalItems(user.recyclingEntries);
	const totalGlass = calculateItemsByType(user.recyclingEntries, 'glass');
	const totalMetal = calculateItemsByType(user.recyclingEntries, 'metall');

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-green-600 text-white p-4 shadow-md">
				<div className="container mx-auto flex justify-between items-center">
					<h1 className="text-2xl font-bold">Resirkuleringsapp</h1>
					<div className="flex items-center space-x-2">
						<span>{user.name}</span>
					</div>
				</div>
			</header>

			<main className="container mx-auto p-4 md:p-6">
				<div className="bg-white rounded-lg shadow-md p-6 mb-6">
					<h2 className="text-xl font-semibold mb-4">
						Din resirkuleringsstatistikk
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="bg-blue-50 p-4 rounded-lg text-center">
							<div className="text-3xl font-bold text-blue-600">
								{totalItems}
							</div>
							<div className="text-sm text-gray-600">Totalt antall enheter</div>
						</div>
						<div className="bg-blue-50 p-4 rounded-lg text-center">
							<div className="text-3xl font-bold text-blue-600">
								{totalGlass}
							</div>
							<div className="text-sm text-gray-600">Glass</div>
						</div>
						<div className="bg-blue-50 p-4 rounded-lg text-center">
							<div className="text-3xl font-bold text-blue-600">
								{totalMetal}
							</div>
							<div className="text-sm text-gray-600">Metall</div>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold mb-4">
						Din resirkuleringshistorikk
					</h2>
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Dato
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Antall
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Type
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Plassering
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{user.recyclingEntries.map((entry) => (
									<tr key={entry.id}>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{formatDate(entry.timestamp)}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{entry.itemCount}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{entry.itemType === 'glass' ? 'Glass' : 'Metall'}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{entry.container.location} ({entry.container.area})
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Demonstrasjon av backend-integrasjon for Oppgave 3 */}
				<RecyclingData />
			</main>

			<footer className="bg-gray-100 p-4 mt-8">
				<div className="container mx-auto text-center text-gray-500 text-sm">
					© 2025{' '}
					<a href="http://lhagfoss.com/" className="underline">
						Lucas Thanawat Hagfoss
					</a>
				</div>
			</footer>
		</div>
	);
}
