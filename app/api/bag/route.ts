import prisma from '@/lib/db'

import { catchError } from '@/lib/apiHandler'
import { clientError, success } from '@/lib/statusCodes'

export async function POST(request: Request) {
	return catchError({ callback: async () => {
		const data = await request.json()

		const { productName } = data

		const existingBag = await prisma.bag.findFirst({
			where: {
				productName
			}
		})

		if(existingBag) return clientError({ code: 409 })

		await prisma.bag.create({
			data: { ...data }
		})

		return success({ code: 201 })
	} })
}

export async function PUT(request: Request) {
	return catchError({ callback: async () => {
		const data = await request.json()

		const { id, brand, description, productName, price, tags, upperImage, middleImage, lowerImage, pieces } = data
		
		await prisma.bag.update({
			where: {
				id
			},
			data: {
				brand,
				description,
				productName,
				price,
				tags,
				upperImage,
				middleImage,
				lowerImage,
				pieces,
				updatedAt: new Date()
			}
		})

		return success({ code: 201 })
	} })
}
