'use client'

import Image from "next/image"

import { AiOutlineClose } from "react-icons/ai"

import useAddBagModal from "@/hooks/products/useAddBagModal"
import UseEditProductCard from "@/hooks/products/useEditProductCard"

import BagForm from "./BagForm"
import Icon from "../Icon"

const AddBagModal = () => {
	const { close } = useAddBagModal()
	const { isEditMode, setEditMode, setHasEdited } = UseEditProductCard()

	const Header = () => <div className="w-full full-flex">
		<p className="black">{isEditMode ? "Edit" : "Add"} Bag</p>
		<Icon icon={AiOutlineClose} onClick={() => {
			close()
			setEditMode(false)
			setHasEdited(false)
		}} />
	</div>

	return (
		<div className="inset-0 absolute bg-black/50 flex-center">
			<div className="bg-white rounded-xl h-[90%] w-[70%] p-5 px-7">
				<Header />
				<div className="flex mt-3">
					<div>
						<div className="pointer main-bg">
							<Image alt="Test Image" src='/img/bag1.png' width={250} height={150} />
						</div>
						<div className="pointer main-bg mt-3">
							<Image alt="Test Image" src='/img/bag1.png' width={250} height={150} />
						</div>
						<div className="pointer main-bg mt-3">
							<Image alt="Test Image" src='/img/bag1.png' width={250} height={150} />
						</div>
					</div>
					<Image alt="Test Image" src='/img/bag1.png' width={450} height={150} />
					<BagForm isEditMode={isEditMode} />
				</div>
			</div>
		</div>
	)
}

export default AddBagModal
