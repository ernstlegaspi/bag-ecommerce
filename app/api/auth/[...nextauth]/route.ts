import bcrypt from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'

import NextAuth, { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@/lib/db'

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/',
		signOut: '/'
	},
	debug: process.env.NODE_ENV === 'development',
	session: {
		strategy: 'jwt'
	},
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' }
			},
			async authorize(credentials) {
				if(!credentials) return null

				if(!credentials.email || !credentials.password) return null

				const user = await prisma.admin.findUnique({
					where: {
						email: credentials.email
					}
				})

				if(!user || !user?.password) return null

				const hashedPassword = await bcrypt.compare(credentials?.password, user?.password)

				if(!hashedPassword) return null

				return user
			}
		})
	],
	callbacks: {
		async jwt({ token }) {
			return { ...token }
		},
		async session({ session }) {
			return session
		}
	}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
