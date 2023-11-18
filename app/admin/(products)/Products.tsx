import { useQuery } from "@tanstack/react-query"

import CategoryColumn from "@/components/CategoryColumn"
import ProductCard from "./ProductCard"
import ProductNav from "./ProductNav"

import { ProductsCategories } from '@/constants/'
import { getAllBags } from "@/server/actions/getAllBag"

export default function Product() {
	const { data } = useQuery({
		queryKey: ['bags'],
		queryFn: getAllBags
	})

	console.log(data)
	
	return (
		<>
			<ProductNav />
			<div className="card pb-3 mt-3 mr-3 black">
				<div className="flex-between black px-3 pt-3 pb-2 text-[12px] font-bold border-b">
					{ProductsCategories.map((category, idx) => <CategoryColumn key={idx} text={category} />)}
				</div>
				{!data || data?.length < 1 ? <p className="text-[12px] mt-3 ml-3">No products available.</p> : data?.map((bag, idx) => <ProductCard key={idx} bag={bag} />)}
			</div>
		</>
	)
}
