import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const data = await request.json()

		await prisma.bag.create({
			data: { ...data }
		})

		return NextResponse.json({ status: 201 })
	}
	catch(error: any) {
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
