import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	console.log('Starter seeding av databasen...');

	const user1 = await prisma.user.upsert({
		where: { email: 'ola.nordmann@example.com' },
		update: {},
		create: {
			name: 'Ola Nordmann',
			email: 'ola.nordmann@example.com',
			phoneNumber: '12345678',
			barcode: '123456789',
		},
	});

	const user2 = await prisma.user.upsert({
		where: { email: 'kari.nordmann@example.com' },
		update: {},
		create: {
			name: 'Kari Nordmann',
			email: 'kari.nordmann@example.com',
			phoneNumber: '87654321',
			barcode: '987654321',
		},
	});

	console.log('Opprettet brukere:', { user1, user2 });

	const container1 = await prisma.recyclingContainer.create({
		data: {
			location: 'Storgata 1',
			area: 'Sentrum',
			capacity: 1000,
			currentFillLevel: 250,
			lastEmptied: new Date('2025-04-01'),
		},
	});

	const container2 = await prisma.recyclingContainer.create({
		data: {
			location: 'Parkveien 8',
			area: 'Vest',
			capacity: 800,
			currentFillLevel: 150,
			lastEmptied: new Date('2025-04-05'),
		},
	});

	const container3 = await prisma.recyclingContainer.create({
		data: {
			location: 'Sjøgata 12',
			area: 'Øst',
			capacity: 1200,
			currentFillLevel: 300,
			lastEmptied: new Date('2025-04-03'),
		},
	});

	console.log('Opprettet kontainere:', { container1, container2, container3 });

	const lottery = await prisma.lottery.create({
		data: {
			drawDate: new Date('2025-05-01'),
			status: 'planlagt',
		},
	});

	console.log('Opprettet lotteri:', lottery);

	const entry1 = await prisma.recyclingEntry.create({
		data: {
			userId: user1.id,
			containerId: container1.id,
			itemCount: 5,
			itemType: 'glass',
			timestamp: new Date('2025-04-15T14:30:00Z'),
		},
	});

	const entry2 = await prisma.recyclingEntry.create({
		data: {
			userId: user1.id,
			containerId: container2.id,
			itemCount: 3,
			itemType: 'metall',
			timestamp: new Date('2025-04-10T10:15:00Z'),
		},
	});

	for (let i = 0; i < entry1.itemCount; i++) {
		await prisma.lotteryTicket.create({
			data: {
				userId: user1.id,
				lotteryId: lottery.id,
				recyclingEntryId: entry1.id,
			},
		});
	}

	for (let i = 0; i < entry2.itemCount; i++) {
		await prisma.lotteryTicket.create({
			data: {
				userId: user1.id,
				lotteryId: lottery.id,
				recyclingEntryId: entry2.id,
			},
		});
	}

	console.log('Opprettet resirkuleringsregistreringer og lodd for Ola');

	const entry3 = await prisma.recyclingEntry.create({
		data: {
			userId: user2.id,
			containerId: container3.id,
			itemCount: 7,
			itemType: 'glass',
			timestamp: new Date('2025-04-05T16:45:00Z'),
		},
	});

	const entry4 = await prisma.recyclingEntry.create({
		data: {
			userId: user2.id,
			containerId: container1.id,
			itemCount: 2,
			itemType: 'metall',
			timestamp: new Date('2025-04-01T09:20:00Z'),
		},
	});

	for (let i = 0; i < entry3.itemCount; i++) {
		await prisma.lotteryTicket.create({
			data: {
				userId: user2.id,
				lotteryId: lottery.id,
				recyclingEntryId: entry3.id,
			},
		});
	}

	for (let i = 0; i < entry4.itemCount; i++) {
		await prisma.lotteryTicket.create({
			data: {
				userId: user2.id,
				lotteryId: lottery.id,
				recyclingEntryId: entry4.id,
			},
		});
	}

	console.log('Opprettet resirkuleringsregistreringer og lodd for Kari');
	console.log('Seeding fullført!');
}

main()
	.catch((e) => {
		console.error('Feil under seeding:', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
