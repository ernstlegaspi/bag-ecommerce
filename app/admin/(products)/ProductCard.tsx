'use client'

import Image from "next/image"

import { useTransition } from 'react'
import { MdDelete , MdEdit } from "react-icons/md"

import CategoryColumn from "@/components/CategoryColumn"
import Icon from "@/components/Icon"

import UseAddBagModal from "@/hooks/products/useAddBagModal"
import UseBagToEdit from "@/hooks/products/useBagToEdit"
import UseEditProductCard from "@/hooks/products/useEditProductCard"
import UseDeleteModal from "@/hooks/useDeleteModal"

import { BagType } from "@/constants"

type BagProps = {
	bag: BagType
	setBagDetails: ({ bagId, bagName }: { bagId: string | undefined, bagName: string }) => void
}

const ProductCard = ({ bag, setBagDetails }: BagProps) => {
	const [_, startTransition] = useTransition()
	const { open } = UseAddBagModal()
	const { setEditMode } = UseEditProductCard()
	const { setBag } = UseBagToEdit()
	const { toggle } = UseDeleteModal()

	return (
		<div className="full-flex px-3 text-[10px] py-2 black">
			<CategoryColumn className="flex-v-center">
				<Image alt="Item Image" src="/img/bag1.png" width={50} height={50} />
				<div className="ml-2">
					<p>{bag.productName}</p>
					<p className="text-gray-400">Model Bag 1</p>
				</div>
			</CategoryColumn>
			<CategoryColumn text={bag.brand} />
			<CategoryColumn text={bag.pieces?.toString()} />
			<CategoryColumn text={bag.pieces > 0 ? 'Stock' : 'Out of Stock'} />
			<CategoryColumn text={bag.price?.toString()} />
			<CategoryColumn className="flex-v-center text-sm">
				<Icon icon={MdEdit} onClick={() => {
					open()
					setBag(bag)
					setEditMode(true)
				}} />
				<div className="text-red-400">
					<Icon icon={MdDelete} onClick={() => {
						setBagDetails({ bagId: bag.id, bagName: bag.productName })
						startTransition(() => toggle(true))
					}} />
				</div>
			</CategoryColumn>
		</div>
	)
}

export default ProductCard
