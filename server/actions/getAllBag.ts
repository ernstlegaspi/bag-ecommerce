'use server'

import prisma from '@/lib/db'

export async function getAllBags() {
	try {
		const bags = await prisma.bag.findMany()

		return bags
	}
	catch(e) {
		return null
	}
}
