'use client'

import Image from "next/image"

import { MdDelete , MdEdit } from "react-icons/md"
import { useQuery } from "@tanstack/react-query"

import Icon from "@/components/Icon"
import CategoryColumn from "@/components/CategoryColumn"

import { getAllBags } from "@/server/actions/getAllBag"

const ProductCard = () => {
	const { data, error } = useQuery({
		queryKey: ["bags"],
		queryFn: getAllBags
	})

	return (
		<>
			{data?.map(bag => (
				<div key={bag.id} className="full-flex px-3 text-[10px] py-2 black">
					<CategoryColumn className="flex-v-center">
						<Image alt="Item Image" src="/img/bag1.png" width={50} height={50} />
						<div className="ml-2">
							<p>{bag.productName}</p>
							<p className="text-gray-400">Model Bag 1</p>
						</div>
					</CategoryColumn>
					<CategoryColumn text={bag.brand} />
					<CategoryColumn text={bag.pieces.toString()} />
					<CategoryColumn text={bag.pieces > 0 ? 'Stock' : 'Out of Stock'} />
					<CategoryColumn text={bag.price.toString()} />
					<CategoryColumn className="flex-v-center text-sm">
						<Icon icon={MdEdit} onClick={() => {}} />
						<div className="text-red-400">
							<Icon icon={MdDelete} onClick={() => {}} />
						</div>
					</CategoryColumn>
				</div>
			))}
		</>
	)
}

export default ProductCard