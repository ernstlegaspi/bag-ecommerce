export const TransactionCategories = ["Customer", "Email", "Product", "Order Date", "Status", "Price"]

export const ProductsCategories = ["Product Name", "Brand", "Pieces", "Status", "Prices", "Actions"]

export type BagType = {
	id?: string
	brand: string
	description: string
	productName: string
	price: number
	tags: string
	upperImage?: string | null
	middleImage?: string | null
	lowerImage?: string | null
	pieces: number
}
