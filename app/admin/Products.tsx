'use client'

import Image from "next/image"

import { lazy, Suspense, useTransition } from "react"
import { IoMdArrowDropdown } from "react-icons/io"

import UseAddBagModal from "@/hooks/useAddBagModal"
import Button from "@/components/Button"

const AddBagModal = lazy(() => import('../../components/modals/AddBagModal'))

const Products = () => {
	const [_, startTransition] = useTransition()
	const { isOpen, open } = UseAddBagModal()
	
	return (
		<>
			{isOpen ? <Suspense fallback={<p>Loading</p>}>
				<AddBagModal />
			</Suspense> : null}
			<div className="mt-3 mr-3 flex-between">
				<div className="pointer bg-white rounded-[4px] text-[12px] flex-v-center py-1 px-3">
					<p className="mr-3">All brand</p>
					<IoMdArrowDropdown />
				</div>
				<Button onClick={() => startTransition(() => open())} text="Add a new bag" width="w-max" />
			</div>
			<div className="card h-[85%] mt-3 mr-3 black">
				<div className="flex-between black px-3 pt-3 pb-2 text-[12px] font-bold border-b">
					<div className="py-1 w-[20%]">
						<p>Product Name</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Brand</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Pieces</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Status</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Prices</p>
					</div>
				</div>
				<div className="full-flex px-3 text-[10px] py-2 black">
					<div className="flex-v-center w-[20%]">
						<Image alt="Item Image" src="/img/bag1.png" width={50} height={50} />
						<div className="ml-2">
							<p>Bag 1</p>
							<p className="text-gray-400">Model Bag 1</p>
						</div>
					</div>
					<div className="py-1 w-[20%]">
						<p>Louis Vuitton</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>20</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Stock</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>₱ 100,000</p>
					</div>
				</div>
				<div className="full-flex px-3 text-[10px] py-2 black">
					<div className="flex-v-center w-[20%]">
						<Image alt="Item Image" src="/img/bag1.png" width={50} height={50} />
						<div className="ml-2">
							<p>Bag 1</p>
							<p className="text-gray-400">Model Bag 1</p>
						</div>
					</div>
					<div className="py-1 w-[20%]">
						<p>Colin</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>20</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Stock</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>₱ 100,000</p>
					</div>
				</div>
				<div className="full-flex px-3 text-[10px] py-2 black">
					<div className="flex-v-center w-[20%]">
						<Image alt="Item Image" src="/img/bag1.png" width={50} height={50} />
						<div className="ml-2">
							<p>Bag 1</p>
							<p className="text-gray-400">Model Bag 1</p>
						</div>
					</div>
					<div className="py-1 w-[20%]">
						<p>Jansport</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>20</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Stock</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>₱ 100,000</p>
					</div>
				</div>
				<div className="full-flex px-3 text-[10px] py-2 black">
					<div className="flex-v-center w-[20%]">
						<Image alt="Item Image" src="/img/bag1.png" width={50} height={50} />
						<div className="ml-2">
							<p>Bag 1</p>
							<p className="text-gray-400">Model Bag 1</p>
						</div>
					</div>
					<div className="py-1 w-[20%]">
						<p>Colin</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>20</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Stock</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>₱ 100,000</p>
					</div>
				</div>
				<div className="full-flex px-3 text-[10px] py-2 black">
					<div className="flex-v-center w-[20%]">
						<Image alt="Item Image" src="/img/bag1.png" width={50} height={50} />
						<div className="ml-2">
							<p>Bag 1</p>
							<p className="text-gray-400">Model Bag 1</p>
						</div>
					</div>
					<div className="py-1 w-[20%]">
						<p>Colin</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>20</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>Stock</p>
					</div>
					<div className="py-1 w-[20%]">
						<p>₱ 100,000</p>
					</div>
				</div>

			</div>
		</>
	)
}

export default Products