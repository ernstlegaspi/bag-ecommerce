'use client'

import Image from "next/image"

import { MdDelete , MdEdit } from "react-icons/md"

import CategoryColumn from "@/components/CategoryColumn"
import Icon from "@/components/Icon"

import UseAddBagModal from "@/hooks/products/useAddBagModal"
import UseBagToEdit from "@/hooks/products/useBagToEdit"
import UseEditProductCard from "@/hooks/products/useEditProductCard"

import { BagType } from "@/constants"

const ProductCard = ({ bag }: { bag: BagType }) => {
	const { open } = UseAddBagModal()
	const { hasEdited, setEditMode,  setHasEdited } = UseEditProductCard()
	const { bag: editedBag, setBag } = UseBagToEdit()

	return (
		<div className="full-flex px-3 text-[10px] py-2 black">
			<CategoryColumn className="flex-v-center">
				<Image alt="Item Image" src="/img/bag1.png" width={50} height={50} />
				<div className="ml-2">
					<p>{hasEdited ? editedBag.productName : bag.productName}</p>
					<p className="text-gray-400">Model Bag 1</p>
				</div>
			</CategoryColumn>
			<CategoryColumn text={hasEdited ? editedBag.brand : bag.brand} />
			<CategoryColumn text={hasEdited ? editedBag.pieces?.toString() : bag.pieces?.toString()} />
			<CategoryColumn text={hasEdited ? editedBag.pieces > 0 ? 'Stock' : 'Out of Stock' : bag.pieces > 0 ? 'Stock' : 'Out of Stock'} />
			<CategoryColumn text={hasEdited ? editedBag.price?.toString() : bag.price?.toString()} />
			<CategoryColumn className="flex-v-center text-sm">
				<Icon icon={MdEdit} onClick={() => {
					open()
					setBag(bag)
					setEditMode(true)
					setHasEdited(false)
				}} />
				<div className="text-red-400">
					<Icon icon={MdDelete} onClick={() => {}} />
				</div>
			</CategoryColumn>
		</div>
	)
}

export default ProductCard
