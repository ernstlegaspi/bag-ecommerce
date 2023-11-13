import bcrypt from 'bcrypt'
import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const data = await request.json()

		console.log(data)
		
		const { email, password } = data

		const salt = await bcrypt.genSalt(12)
		const hashedPassword  = await bcrypt.hash(password, salt)
		
		await prisma.admin.create({
			data: {
				email, password: hashedPassword
			}
		})

		return NextResponse.json({ status: 201 })
	}
	catch(e) {
		console.log("ERROR")
	}
}
