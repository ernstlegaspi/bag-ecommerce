import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Overview from './Overview'

export default function Dashboard() {
	return (
		<div className="w-full h-full main-bg p-3 flex">
			<Sidebar />
			<div className="w-full ml-3 scroll">
				<Navbar />
				<Overview />
			</div>
		</div>
	)
}
