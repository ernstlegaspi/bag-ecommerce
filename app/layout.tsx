import { Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'

import './globals.css'

import SessionProvider from '@/components/providers/SessionProvider'
import QueryProvider from '@/components/providers/QueryProvider'

const inter = Roboto({
	weight: '400',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Admin Dashboard',
	description: 'Admin Dashboard'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<html lang="en">
				<body className={`${inter.className} h-screen`}>
					<Toaster />
					<QueryProvider>
						{children}
					</QueryProvider>
				</body>
			</html>
		</SessionProvider>
	)
}
