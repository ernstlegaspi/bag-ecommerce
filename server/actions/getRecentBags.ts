'use server'

import prisma from '@/lib/db'

export async function getRecentBags() {
	try {
		const recentBags = await prisma.bag.findMany({
			orderBy: {
				updatedAt: 'desc'
			},
			take: 3
		})

		return recentBags
	}
	catch(e) {
		return null
	}
}
