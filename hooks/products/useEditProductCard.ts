import { create } from 'zustand'

interface EditProductCardProps {
	hasEdited: boolean
	isEditMode: boolean
	setEditMode: (toggle: boolean) => void
	setHasEdited: (newVal: boolean) => void
}

const UseEditProductCard = create<EditProductCardProps>(set => ({
	hasEdited: false,
	isEditMode: false,
	setEditMode: toggle => set({ isEditMode: toggle }),
	setHasEdited: newVal => set({ hasEdited: newVal })
}))

export default UseEditProductCard
