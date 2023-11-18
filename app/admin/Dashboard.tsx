import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Overview from './Overview'

import { getAllBags } from '@/server/actions/getAllBag'
import getQueryClient from '@/lib/getQueryClient'

export default async function Dashboard() {
	const queryClient = getQueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['bags'],
		queryFn: getAllBags
	})

	return (
		<div className="w-full h-full main-bg p-3 flex">
			<Sidebar />
			<div className="w-full ml-3 scroll">
				<Navbar />
				<HydrationBoundary state={dehydrate(queryClient)}>
					<Overview />
				</HydrationBoundary>
			</div>
		</div>
	)
}
