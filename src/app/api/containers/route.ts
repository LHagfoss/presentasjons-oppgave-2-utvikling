import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const containers = await prisma.recyclingContainer.findMany({
            orderBy: {
                location: 'asc'
            }
        });

        return NextResponse.json({ containers });
    } catch (error) {
        console.error('Error fetching containers:', error);
        return NextResponse.json(
            { error: 'Could not fetch containers' },
            { status: 500 }
        );
    }
}