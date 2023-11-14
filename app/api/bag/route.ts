import prisma from '@/lib/db'

import { catchError } from '@/lib/apiHandler'
import { success } from '@/lib/statusCodes'

export async function POST(request: Request) {
	return catchError({ callback: async () => {
		const data = await request.json()

		await prisma.bag.create({
			data: { ...data }
		})

		return success({ code: 201 })
	} })
}
