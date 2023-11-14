import { AiOutlineLineChart } from 'react-icons/ai'
import { DonutChart } from "@tremor/react";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DashboardSummary = () => {
	const cities = [
		{
			name: "Delivered",
			sales: 100,
		},
		{
			name: "Pending",
			sales: 50,
		}
	]
	
	const valueFormatter = (number: number) => `${new Intl.NumberFormat("us").format(number).toString()}`

	const router = useRouter()
	
	return (
		<div className="mr-3">
			<button onClick={async () => {
				await signOut({ redirect: false })
				router.push('/')
			}}>Logout</button>
			<div className="flex mt-3 mb-6 h-[260px]">
				<div>
					<div className="flex h-[48%] mb-3">
						<div className="card w-[250px] h-full flex-v-center justify-between black px-6 mr-3">
							<div>
								<p className="text-[12px]">Weekly Sales</p>
								<p className="font-bold my-2">2,500</p>
								<p className="text-[10px]">Increased by 60%</p>
							</div>
							<div className="bg-gray rounded-full p-2 ml-8">
								<AiOutlineLineChart size={20} />
							</div>
						</div>
						<div className="card w-[250px] h-full flex-v-center justify-between black px-6 mr-3">
							<div>
								<p className="text-[12px]">Weekly Order</p>
								<p className="font-bold my-2">2,500</p>
								<p className="text-[10px]">Increased by 60%</p>
							</div>
							<div className="bg-gray rounded-full p-2 ml-8">
								<AiOutlineLineChart size={20} />
							</div>
						</div>
					</div>
					<div className="flex h-[48%]">
						<div className="card w-[250px] h-full flex-v-center justify-between black px-6 mr-3">
							<div>
								<p className="text-[12px]">New Orders</p>
								<p className="font-bold my-2">2,500</p>
								<p className="text-[10px]">Increased by 60%</p>
							</div>
							<div className="bg-gray rounded-full p-2 ml-8">
								<AiOutlineLineChart size={20} />
							</div>
						</div>
						<div className="card w-[250px] h-full flex-v-center justify-between black px-6">
							<div>
								<p className="text-[12px]">Total Income</p>
								<p className="font-bold my-2">2,500</p>
								<p className="text-[10px]">Increased by 60%</p>
							</div>
							<div className="bg-gray rounded-full p-2 ml-8">
								<AiOutlineLineChart size={20} />
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="card p-4 mr-3 w-[40%] h-full">
						<DonutChart
							className="w-full"
							data={cities}
							category="sales"
							index="name"
							valueFormatter={valueFormatter}
							colors={["slate", "sky"]}
						/>
						<div className="flex-v-center justify-center flex-col">
							<div className="flex-v-center my-2">
								<div className="mr-1 bg-slate-500 rounded-full w-[13px] h-[13px]"></div>
								<p className="mt-[1px] black text-[12px]">Delivered</p>
							</div>
							<div className="flex-v-center">
								<div className="mr-1 bg-sky-500 rounded-full w-[13px] h-[13px]"></div>
								<p className="mt-[1px] black text-[12px]">Pending</p>
							</div>
						</div>
					</div>
					<div className="card w-[60%] py-3">
						<p className="black text-[12px] ml-3 mb-3">Top Selling Bags</p>
						<div className="h-[1px] bg-gray-200 w-full"></div>
					</div>
				</div>
			</div>
			<div className="flex w-full">
				<div className="card w-[33%] h-[273px] mr-3 py-3">
					<p className="black text-[12px] ml-3 mb-3">Top Customers</p>
					<div className="h-[1px] bg-gray-200 w-full"></div>
				</div>
				<div className="card w-[33%] h-[273px] mr-3 py-3">
					<p className="black text-[12px] ml-3 mb-3">Recent Bags</p>
					<div className="h-[1px] bg-gray-200 w-full"></div>
				</div>
				<div className="card w-[33%] h-[273px] py-3">
					<p className="black text-[12px] ml-3 mb-3">Customer Order Activity</p>
					<div className="h-[1px] bg-gray-200 w-full"></div>
				</div>
			</div>
		</div>
	)
}

export default DashboardSummary