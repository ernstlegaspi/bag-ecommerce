'use client'

import useSidebarCategory from "@/hooks/useSidebarCategory"

import Customers from "./Customers"
import DashboardSummary from "./(dashboard-summary)/DashboardSummary"
import Products from "./(products)/Products"
import Transactions from "./Transactions"

export default function Overview() {
	const sidebarCategory = useSidebarCategory()

	if(sidebarCategory.category === 'Dashboard') return <DashboardSummary />

	if(sidebarCategory.category === 'Transactions') return <Transactions />

	if(sidebarCategory.category === 'Products') return <Products />

	if(sidebarCategory.category === 'Customers') return <Customers />

	return (
		<p>Nothing...</p>
	)
}
