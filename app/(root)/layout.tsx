import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({
	weight: '400',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Admin Dashboard',
	description: 'Admin Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} h-screen`}>
				{children}
			</body>
		</html>
	)
}
