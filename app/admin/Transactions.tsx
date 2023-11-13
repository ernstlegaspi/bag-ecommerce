import Image from "next/image";

export default function Transactions() {
	return (
		<div className="card h-[91%] mt-3 mr-3 black">
			<div className="flex-between black px-3 pt-3 pb-2 text-[12px] font-bold border-b">
				<div className="py-1 w-[16%]">
					<p>Customer</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Email</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Product</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Order Date</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Status</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Price</p>
				</div>
			</div>
			<div className="full-flex px-3 text-[10px] py-2">
				<div className="py-1 w-[16%]">
					<div className="flex-v-center">
						<Image className="rounded-full" alt="User Image" src="/img/placeholder.jpg" width={20} height={20} />
						<p className="ml-2">Ernst Legaspi</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>legaspiernstdanielle@gmail.com</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Louis Vuitton</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>11/06/2023</p>
				</div>
				<div className="py-1 w-[16%]">
					<div className="text-white bg-green-500 w-max rounded-full p-1 px-2">
						<p>Completed</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>₱ 100,000</p>
				</div>
			</div>
			<div className="full-flex px-3 text-[10px] bg-gray py-2">
				<div className="py-1 w-[16%]">
					<div className="flex-v-center">
						<Image className="rounded-full" alt="User Image" src="/img/placeholder.jpg" width={20} height={20} />
						<p className="ml-2">Ernst Legaspi</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>legaspiernstdanielle@gmail.com</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Louis Vuitton</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>11/06/2023</p>
				</div>
				<div className="py-1 w-[16%]">
					<div className="text-white bg-sky-500 w-max rounded-full p-1 px-2">
						<p>Pending</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>₱ 100,000</p>
				</div>
			</div>
			<div className="full-flex px-3 text-[10px] py-2">
				<div className="py-1 w-[16%]">
					<div className="flex-v-center">
						<Image className="rounded-full" alt="User Image" src="/img/placeholder.jpg" width={20} height={20} />
						<p className="ml-2">Ernst Legaspi</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>legaspiernstdanielle@gmail.com</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Louis Vuitton</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>11/06/2023</p>
				</div>
				<div className="py-1 w-[16%]">
					<div className="text-white bg-red-400 w-max rounded-full p-1 px-2">
						<p>Cancelled</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>₱ 100,000</p>
				</div>
			</div>
			<div className="full-flex px-3 text-[10px] bg-gray py-2">
				<div className="py-1 w-[16%]">
					<div className="flex-v-center">
						<Image className="rounded-full" alt="User Image" src="/img/placeholder.jpg" width={20} height={20} />
						<p className="ml-2">Ernst Legaspi</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>legaspiernstdanielle@gmail.com</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Louis Vuitton</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>11/06/2023</p>
				</div>
				<div className="py-1 w-[16%]">
					<div className="text-white bg-sky-500 w-max rounded-full p-1 px-2">
						<p>Pending</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>₱ 100,000</p>
				</div>
			</div>
			<div className="full-flex px-3 text-[10px] py-2">
				<div className="py-1 w-[16%]">
					<div className="flex-v-center">
						<Image className="rounded-full" alt="User Image" src="/img/placeholder.jpg" width={20} height={20} />
						<p className="ml-2">Ernst Legaspi</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>legaspiernstdanielle@gmail.com</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>Louis Vuitton</p>
				</div>
				<div className="py-1 w-[16%]">
					<p>11/06/2023</p>
				</div>
				<div className="py-1 w-[16%]">
					<div className="text-white bg-red-400 w-max rounded-full p-1 px-2">
						<p>Cancelled</p>
					</div>
				</div>
				<div className="py-1 w-[16%]">
					<p>₱ 100,000</p>
				</div>
			</div>
		</div>
	)
}