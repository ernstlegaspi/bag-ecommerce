import { z } from 'zod'

export const authSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3)
})
.strict()

export const addBagSchema = z.object({
	productName: z.string(),
	description: z.string(),
	brand: z.string(),
	pieces: z.number().nonnegative(),
	price: z.number().nonnegative(),
	tags: z.string()
})
.strict()
