import { useQuery } from "@tanstack/react-query"


import ProductList from "./ProductList"
import ProductNav from "./ProductNav"

import { getAllBags } from "@/server/actions/getAllBag"

export default function Product() {
	const { data } = useQuery({
		queryKey: ['bags'],
		queryFn: getAllBags
	})

	return (
		<>
			<ProductNav />
			<ProductList data={data} />
		</>
	)
}
