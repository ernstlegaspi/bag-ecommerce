import { create } from "zustand"

interface UseAddBagModalProps {
	isOpen: boolean
	close: () => void
	open: () => void
}

const UseAddBagModal = create<UseAddBagModalProps>(set => ({
	isOpen: false,
	close: () => set({ isOpen: false }),
	open: () => set({ isOpen: true })
}))

export default UseAddBagModal