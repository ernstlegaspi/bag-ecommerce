'use client'

import { lazy, Suspense, useTransition } from "react"

import { IoMdArrowDropdown } from "react-icons/io"

import Button from "@/components/Button"
import UseAddBagModal from "@/hooks/products/useAddBagModal"
import UseEditProductCard from "@/hooks/products/useEditProductCard"

const AddBagModal = lazy(() => import('@/components/modals/AddBagModal'))

const ProductNav = () => {
	const [_, startTransition] = useTransition()
	const { isOpen, open } = UseAddBagModal()
	const { setEditMode, setHasEdited } = UseEditProductCard()

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
				<Button onClick={() => startTransition(() => {
					open()
					setEditMode(false)
					setHasEdited(false)
				})} text="Add a new bag" width="w-max" />
			</div>
		</>
	)
}

export default ProductNav