import prisma from '@/lib/db'

import { catchError } from '@/lib/apiHandler'
import { success } from '@/lib/statusCodes'

interface IParams {
	id: string
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
	return catchError({ callback: async () => {
		await prisma.bag.delete({
			where: {
				id: params.id
			}
		})

		return success({ code: 201 })
	} })
}
