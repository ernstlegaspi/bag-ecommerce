import { create } from "zustand"

interface CategoryProps {
	category: string
	setCategory: (newCategory: string) => void
}

const useSidebarCategory = create<CategoryProps>(set => ({
	category: 'Dashboard',
	setCategory: (newCategory: string) => set({ category: newCategory })
}))

export default useSidebarCategory
