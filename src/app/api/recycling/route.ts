import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const userId = searchParams.get('userId');

		const userQuery = userId
			? prisma.user.findUnique({ where: { id: userId } })
			: prisma.user.findFirst();

		const user = await userQuery;

		if (!user) {
			return NextResponse.json(
				{
					error: userId
						? 'Bruker ikke funnet'
						: 'Ingen brukere funnet i systemet',
				},
				{ status: 404 }
			);
		}

		const userData = await prisma.user.findUnique({
			where: { id: user.id },
			include: {
				recyclingEntries: {
					include: {
						container: true,
					},
					orderBy: {
						timestamp: 'desc',
					},
				},
			},
		});

		return NextResponse.json({ user: userData });
	} catch (error) {
		console.error('Feil ved henting av resirkuleringsdata:', error);
		return NextResponse.json(
			{ error: 'Feil ved henting av resirkuleringsdata' },
			{ status: 500 }
		);
	}
}

// POST /api/recycling
// Registrerer en ny resirkulering
export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { userId, containerId, itemCount, itemType } = body;

		// Valider inndata
		if (!userId || !containerId || !itemCount || !itemType) {
			return NextResponse.json(
				{ error: 'Manglende påkrevde felt' },
				{ status: 400 }
			);
		}

		// Opprett ny resirkuleringsregistrering
		const recyclingEntry = await prisma.recyclingEntry.create({
			data: {
				userId,
				containerId,
				itemCount,
				itemType,
			},
		});

		// Opprett lodd basert på antall enheter resirkulert
		// Finn aktiv lotteri
		const activeLottery = await prisma.lottery.findFirst({
			where: {
				status: 'planlagt',
			},
		});

		if (activeLottery) {
			// Opprett ett lodd per enhet resirkulert
			const tickets = [];
			for (let i = 0; i < itemCount; i++) {
				tickets.push({
					userId,
					lotteryId: activeLottery.id,
					recyclingEntryId: recyclingEntry.id,
				});
			}

			await prisma.lotteryTicket.createMany({
				data: tickets,
			});
		}

		// Oppdater fyllnivå på kontaineren
		await prisma.recyclingContainer.update({
			where: {
				id: containerId,
			},
			data: {
				currentFillLevel: {
					increment: itemCount,
				},
			},
		});

		return NextResponse.json({ success: true, recyclingEntry });
	} catch (error) {
		console.error('Feil ved registrering av resirkulering:', error);
		return NextResponse.json(
			{ error: 'Feil ved registrering av resirkulering' },
			{ status: 500 }
		);
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const entryId = searchParams.get('id');

		if (!entryId) {
			return NextResponse.json(
				{ error: 'Entry ID is required' },
				{ status: 400 }
			);
		}

		await prisma.lotteryTicket.deleteMany({
			where: {
				recyclingEntryId: entryId,
			},
		});

		const deletedEntry = await prisma.recyclingEntry.delete({
			where: {
				id: entryId,
			},
		});

		return NextResponse.json({ success: true, deletedEntry });
	} catch (error) {
		console.error('Error deleting recycling entry:', error);
		return NextResponse.json(
			{ error: 'Failed to delete recycling entry' },
			{ status: 500 }
		);
	}
}
