import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/users
// Henter alle brukere eller en spesifikk bruker basert på ID
export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const userId = searchParams.get('id');

		if (userId) {
			// Hent en spesifikk bruker
			const user = await prisma.user.findUnique({
				where: { id: userId },
				include: {
					recyclingEntries: true,
					lotteryTickets: true,
				},
			});

			if (!user) {
				return NextResponse.json(
					{ error: 'Bruker ikke funnet' },
					{ status: 404 }
				);
			}

			return NextResponse.json({ user });
		} else {
			// Hent alle brukere
			const users = await prisma.user.findMany({
				select: {
					id: true,
					name: true,
					email: true,
					barcode: true,
					_count: {
						select: {
							recyclingEntries: true,
							lotteryTickets: true,
						},
					},
				},
			});

			return NextResponse.json({ users });
		}
	} catch (error) {
		console.error('Feil ved henting av brukerdata:', error);
		return NextResponse.json(
			{ error: 'Feil ved henting av brukerdata' },
			{ status: 500 }
		);
	}
}

// POST /api/users
// Oppretter en ny bruker
export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, phoneNumber, barcode } = body;

		// Valider inndata
		if (!name || !email || !barcode) {
			return NextResponse.json(
				{
					error:
						'Manglende påkrevde felt: navn, e-post og strekkode er påkrevd',
				},
				{ status: 400 }
			);
		}

		// Sjekk om e-post eller strekkode allerede eksisterer
		const existingUser = await prisma.user.findFirst({
			where: {
				OR: [{ email }, { barcode }],
			},
		});

		if (existingUser) {
			return NextResponse.json(
				{
					error:
						'En bruker med denne e-posten eller strekkoden eksisterer allerede',
				},
				{ status: 409 }
			);
		}

		// Opprett ny bruker
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				phoneNumber,
				barcode,
			},
		});

		return NextResponse.json({ user: newUser }, { status: 201 });
	} catch (error) {
		console.error('Feil ved opprettelse av bruker:', error);
		return NextResponse.json(
			{ error: 'Feil ved opprettelse av bruker' },
			{ status: 500 }
		);
	}
}
