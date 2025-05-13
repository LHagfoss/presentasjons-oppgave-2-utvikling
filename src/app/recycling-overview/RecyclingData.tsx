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

// Komponent som viser henting av data fra API
export default function RecyclingData() {
	const [users, setUsers] = useState<User[]>([]);
	const [selectedUserId, setSelectedUserId] = useState<string>('');
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [newEntry, setNewEntry] = useState({
		itemCount: 1,
		itemType: 'glass',
		containerId: '',
	});
	const [containers, setContainers] = useState([]);
	const [stats, setStats] = useState({
		totalItems: 0,
		totalGlass: 0,
		totalMetal: 0,
	});

	const fetchUsers = async () => {
		try {
			const response = await fetch('/api/users');
			const data = await response.json();
			setUsers(data.users);
			if (data.users.length > 0) {
				setSelectedUserId(data.users[0].id);
			}
		} catch (err) {
			console.error('Error fetching users:', err);
		}
	};

	const fetchContainers = async () => {
		try {
			const response = await fetch('/api/containers');
			if (!response.ok) {
				throw new Error(`Error fetching containers: ${response.status}`);
			}
			const data = await response.json();
			setContainers(data.containers);
		} catch (err) {
			console.error('Error fetching containers:', err);
			setError('Could not fetch containers. Please try again later.');
		}
	};

	useEffect(() => {
		fetchUsers();
		fetchContainers();
	}, []);

	const fetchRecyclingData = async () => {
		if (!selectedUserId) return;

		try {
			setLoading(true);
			setError(null);
			const response = await fetch(`/api/recycling?userId=${selectedUserId}`);

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

	useEffect(() => {
		if (selectedUserId) {
			fetchRecyclingData();
		}
	}, [selectedUserId]);

	const handleSubmitEntry = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/recycling', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userId: selectedUserId,
					...newEntry,
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to submit entry');
			}

			fetchRecyclingData();

			setNewEntry({
				itemCount: 1,
				itemType: 'glass',
				containerId: '',
			});
		} catch (err) {
			console.error('Error submitting entry:', err);
			setError('Failed to submit recycling entry');
		}
	};

	useEffect(() => {
		if (user && user.recyclingEntries) {
			const totalItems = user.recyclingEntries.reduce(
				(sum, entry) => sum + entry.itemCount,
				0
			);
			const totalGlass = user.recyclingEntries
				.filter((entry) => entry.itemType === 'glass')
				.reduce((sum, entry) => sum + entry.itemCount, 0);
			const totalMetal = user.recyclingEntries
				.filter((entry) => entry.itemType === 'metall')
				.reduce((sum, entry) => sum + entry.itemCount, 0);

			setStats({ totalItems, totalGlass, totalMetal });
		}
	}, [user]);

	const handleDelete = async (entryId: string) => {
		if (!confirm('Er du sikker på at du vil slette denne registreringen?')) {
			return;
		}

		try {
			const response = await fetch(`/api/recycling?id=${entryId}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error('Kunne ikke slette registreringen');
			}

			fetchRecyclingData();
		} catch (err) {
			console.error('Feil ved sletting:', err);
			setError('Kunne ikke slette registreringen');
		}
	};

	return (
		<div className="bg-white rounded-lg shadow-md p-6 mb-6">
			<h2 className="text-xl font-semibold mb-4">Resirkuleringsdata</h2>

			<div className="mb-6">
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Velg Bruker
				</label>
				<select
					className="w-full p-2 border rounded"
					value={selectedUserId}
					onChange={(e) => setSelectedUserId(e.target.value)}
				>
					{users.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}
				</select>
			</div>

			<form
				onSubmit={handleSubmitEntry}
				className="mb-6 p-4 bg-gray-50 rounded"
			>
				<h3 className="text-lg font-medium mb-4">Registrer ny resirkulering</h3>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Antall
						</label>
						<input
							type="number"
							min="1"
							value={newEntry.itemCount}
							onChange={(e) =>
								setNewEntry({
									...newEntry,
									itemCount: parseInt(e.target.value),
								})
							}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Type
						</label>
						<select
							value={newEntry.itemType}
							onChange={(e) =>
								setNewEntry({ ...newEntry, itemType: e.target.value })
							}
							className="w-full p-2 border rounded"
						>
							<option value="glass">Glass</option>
							<option value="metall">Metall</option>
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Container
						</label>
						<select
							value={newEntry.containerId}
							onChange={(e) =>
								setNewEntry({ ...newEntry, containerId: e.target.value })
							}
							className="w-full p-2 border rounded"
							required
						>
							<option value="">Velg container</option>
							{containers.map((container) => (
								<option key={container.id} value={container.id}>
									{container.location} ({container.area})
								</option>
							))}
						</select>
					</div>
					<div className="flex items-end">
						<button
							type="submit"
							className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
						>
							Registrer
						</button>
					</div>
				</div>
			</form>

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

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
						<div className="bg-blue-50 p-4 rounded-lg text-center">
							<div className="text-3xl font-bold text-blue-600">
								{stats.totalItems}
							</div>
							<div className="text-sm text-gray-600">Totalt antall enheter</div>
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

					<div className="mt-6">
						<h3 className="text-lg font-medium mb-4">
							Resirkuleringshistorikk
						</h3>
						<div className="overflow-x-auto">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
											Dato
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
											Type
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
											Antall
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
											Lokasjon
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
											Handling
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{user.recyclingEntries.map((entry) => (
										<tr key={entry.id}>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{new Date(entry.timestamp).toLocaleDateString('nb-NO')}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{entry.itemType}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{entry.itemCount}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{entry.container.location}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												<button
													onClick={() => handleDelete(entry.id)}
													className="text-red-600 hover:text-red-900"
												>
													Slett
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

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
