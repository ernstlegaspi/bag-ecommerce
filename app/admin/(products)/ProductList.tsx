'use client'

import { lazy, Suspense, useState } from 'react'

import CategoryColumn from "@/components/CategoryColumn"
import useDeleteModal from '@/hooks/useDeleteModal'

import ProductCard from "./ProductCard"

import { BagType, ProductsCategories } from '@/constants/'

const DeleteBagModal = lazy(() => import('@/components/modals/DeleteBagModal'))

const ProductList = ({ data }: { data: any }) => {
	const [bagDetails, setBagDetails] = useState<{ bagId: string | undefined, bagName: string }>({ bagId: '', bagName: '' })
	const { isOpen } = useDeleteModal()

	return (
		<>
			<div className="card pb-3 mt-3 mr-3 black">
				<div className="flex-between black px-3 pt-3 pb-2 text-[12px] font-bold border-b">
					{ProductsCategories.map((category, idx) => <CategoryColumn key={idx} text={category} />)}
				</div>
				{!data || data?.length < 1 ? <p className="text-[12px] mt-3 ml-3">No products available.</p> : data?.map((bag: BagType, idx: number) => <ProductCard key={idx} bag={bag} setBagDetails={setBagDetails} />)}
			</div>
			{isOpen ? <Suspense fallback={<p>Loading...</p>}>
				<DeleteBagModal bagDetails={bagDetails} />
			</Suspense> : null}
		</>
	)
}

export default ProductList
