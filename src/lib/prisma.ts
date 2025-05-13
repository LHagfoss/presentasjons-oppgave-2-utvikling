import { PrismaClient } from '../../prisma/generated';

// Forhindre flere instanser av Prisma Client i utviklingsmiljø
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: ['query'],
	});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
