import { create } from "zustand"

interface UseDeleteModalProps {
	isOpen: boolean
	toggle: (val?: boolean) => void
}

const UseDeleteModal = create<UseDeleteModalProps>(set => ({
	isOpen: false,
	toggle: (val = false) => set({ isOpen: val })
}))

export default UseDeleteModal
