import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/recycling
// Henter resirkuleringsdata for en bruker
export async function GET(request: NextRequest) {
    try {
        // I en ekte app ville vi hente bruker-ID fra en autentisert sesjon
        // For demonstrasjonsformål bruker vi en fast bruker-ID
        const userId = '1';
        // Hent første bruker fra databasen for demonstrasjon
        const firstUser = await prisma.user.findFirst();
        
        if (!firstUser) {
            return NextResponse.json(
                { error: 'Ingen brukere funnet i systemet' },
                { status: 404 }
            );
        }

        // Hent bruker med resirkuleringsdata
        const user = await prisma.user.findUnique({
            where: { id: firstUser.id },
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

        if (!user) {
            return NextResponse.json(
                { error: 'Bruker ikke funnet' },
                { status: 404 }
            );
        }

        return NextResponse.json({ user });
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