import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default function Dashboard() {
	return (
		<div className="w-full h-full dashboard-main-bg p-2 flex">
			<Sidebar />
			<div className="w-full ml-2">
				<Navbar />
			</div>
		</div>
	)
}