import Image from "next/image"

import CategoryColumn from "@/components/CategoryColumn"

import { TransactionCategories } from '@/constants/'

export default function Transactions() {
	return (
		<div className="card h-[91%] mt-3 mr-3 black">
			<div className="flex-between black px-3 pt-3 pb-2 text-[12px] font-bold border-b">
				{TransactionCategories.map((category, idx) => <CategoryColumn key={idx} text={category} />)}
			</div>
			<div className="full-flex px-3 text-[10px] py-2">
				<CategoryColumn className="flex-v-center">
					<Image className="rounded-full" alt="User Image" src="/img/placeholder.jpg" width={20} height={20} />
					<p className="ml-2">Ernst Legaspi</p>
				</CategoryColumn>
				<CategoryColumn text="legaspiernstdanielle@gmail.com" />
				<CategoryColumn text="Louis Vuitton" />
				<CategoryColumn text="11/06/2023" />
				<CategoryColumn>
				<div className="text-white bg-sky-500 w-max rounded-full p-1 px-2">
					<p>Completed</p>
				</div>
				</CategoryColumn>
				<CategoryColumn text="₱ 100,000" />
			</div>
			<div className="full-flex px-3 text-[10px] py-2">
				<CategoryColumn className="flex-v-center">
					<Image className="rounded-full" alt="User Image" src="/img/placeholder.jpg" width={20} height={20} />
					<p className="ml-2">Ernst Legaspi</p>
				</CategoryColumn>
				<CategoryColumn text="legaspiernstdanielle@gmail.com" />
				<CategoryColumn text="Louis Vuitton" />
				<CategoryColumn text="11/06/2023" />
				<CategoryColumn>
				<div className="text-white bg-green-500 w-max rounded-full p-1 px-2">
					<p>Pending</p>
				</div>
				</CategoryColumn>
				<CategoryColumn text="₱ 100,000" />
			</div>
			<div className="full-flex px-3 text-[10px] py-2">
				<CategoryColumn className="flex-v-center">
					<Image className="rounded-full" alt="User Image" src="/img/placeholder.jpg" width={20} height={20} />
					<p className="ml-2">Ernst Legaspi</p>
				</CategoryColumn>
				<CategoryColumn text="legaspiernstdanielle@gmail.com" />
				<CategoryColumn text="Louis Vuitton" />
				<CategoryColumn text="11/06/2023" />
				<CategoryColumn>
				<div className="text-white bg-red-400 w-max rounded-full p-1 px-2">
					<p>Cancelled</p>
				</div>
				</CategoryColumn>
				<CategoryColumn text="₱ 100,000" />
			</div>
		</div>
	)
}