import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/lottery
// Henter lotteristatus og vinnere
export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const lotteryId = searchParams.get('id');

		if (lotteryId) {
			// Hent et spesifikt lotteri
			const lottery = await prisma.lottery.findUnique({
				where: { id: lotteryId },
				include: {
					winner: true,
					lotteryTickets: {
						include: {
							user: true,
						},
					},
				},
			});

			if (!lottery) {
				return NextResponse.json(
					{ error: 'Lotteri ikke funnet' },
					{ status: 404 }
				);
			}

			return NextResponse.json({ lottery });
		} else {
			// Hent alle lotterier
			const lotteries = await prisma.lottery.findMany({
				include: {
					winner: {
						select: {
							id: true,
							name: true,
							email: true,
						},
					},
					_count: {
						select: {
							lotteryTickets: true,
						},
					},
				},
				orderBy: {
					drawDate: 'desc',
				},
			});

			return NextResponse.json({ lotteries });
		}
	} catch (error) {
		console.error('Feil ved henting av lotteridata:', error);
		return NextResponse.json(
			{ error: 'Feil ved henting av lotteridata' },
			{ status: 500 }
		);
	}
}

// POST /api/lottery/tickets
// Registrerer nye loddkjøp basert på resirkulering
export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { userId, recyclingEntryId, lotteryId } = body;

		// Valider inndata
		if (!userId || !recyclingEntryId || !lotteryId) {
			return NextResponse.json(
				{
					error:
						'Manglende påkrevde felt: bruker-ID, resirkulerings-ID og lotteri-ID er påkrevd',
				},
				{ status: 400 }
			);
		}

		// Sjekk om brukeren eksisterer
		const user = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			return NextResponse.json(
				{ error: 'Bruker ikke funnet' },
				{ status: 404 }
			);
		}

		// Sjekk om resirkuleringsregistreringen eksisterer
		const recyclingEntry = await prisma.recyclingEntry.findUnique({
			where: { id: recyclingEntryId },
		});

		if (!recyclingEntry) {
			return NextResponse.json(
				{ error: 'Resirkuleringsregistrering ikke funnet' },
				{ status: 404 }
			);
		}

		// Sjekk om lotteriet eksisterer og ikke er avsluttet
		const lottery = await prisma.lottery.findUnique({
			where: { id: lotteryId },
		});

		if (!lottery) {
			return NextResponse.json(
				{ error: 'Lotteri ikke funnet' },
				{ status: 404 }
			);
		}

		if (lottery.status !== 'planlagt') {
			return NextResponse.json(
				{ error: 'Dette lotteriet er allerede avsluttet' },
				{ status: 400 }
			);
		}

		// Opprett nytt lodd
		const newTicket = await prisma.lotteryTicket.create({
			data: {
				userId,
				recyclingEntryId,
				lotteryId,
			},
		});

		return NextResponse.json({ ticket: newTicket }, { status: 201 });
	} catch (error) {
		console.error('Feil ved opprettelse av lodd:', error);
		return NextResponse.json(
			{ error: 'Feil ved opprettelse av lodd' },
			{ status: 500 }
		);
	}
}
