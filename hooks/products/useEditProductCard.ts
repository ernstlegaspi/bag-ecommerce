import { create } from 'zustand'

interface EditProductCardProps {
	isEditMode: boolean
	setEditMode: (toggle: boolean) => void
}

const UseEditProductCard = create<EditProductCardProps>(set => ({
	isEditMode: false,
	setEditMode: toggle => set({ isEditMode: toggle })
}))

export default UseEditProductCard
