import CategoryColumn from "@/components/CategoryColumn"
import ProductCard from "./ProductCard"
import ProductNav from "./ProductNav"

import { ProductsCategories } from '@/constants/index'

export default function Product() {
	return (
		<>
			<ProductNav />
			<div className="card h-[83%] mt-3 mr-3 black">
				<div className="flex-between black px-3 pt-3 pb-2 text-[12px] font-bold border-b">
					{ProductsCategories.map((category, idx) => <CategoryColumn key={idx} text={category} />)}
				</div>
				<ProductCard />
			</div>
		</>
	)
}
