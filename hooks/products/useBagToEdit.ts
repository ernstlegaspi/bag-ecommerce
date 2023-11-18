import { create } from 'zustand'

import { BagType } from '@/constants'

interface BagToEditProps {
	bag: BagType
	setBag: (bagToEdit: BagType) => void
}

const UseBagToEdit = create<BagToEditProps>(set => ({
	bag: { id: '', description: '', brand: '', productName: '', price: 0, tags: '', pieces: 0, upperImage: '', middleImage: '', lowerImage: '' },
	setBag: bagToEdit => set({ bag: bagToEdit })
}))

export default UseBagToEdit
