import { ChangeEvent, FormEvent, useState } from "react"

import axios from 'axios'
import toast from 'react-hot-toast'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import Button from '@/components/Button'
import Input from "../Input"

import UseBagToEdit from "@/hooks/products/useBagToEdit"

import { addBagSchema } from "@/lib/schema"
import { BagType } from "@/constants"
import { useRouter } from "next/navigation"

const BagForm = ({ isEditMode }: { isEditMode: boolean }) => {
	const { bag, setBag } = UseBagToEdit()
	const router = useRouter()

	const initialState = {
		brand: isEditMode ? bag.brand : '',
		description: isEditMode ? bag.description : '',
		pieces: isEditMode ? bag.pieces : 0,
		price: isEditMode ? bag.price : 0,
		productName: isEditMode ? bag.productName : '',
		tags: isEditMode ? bag.tags : ''
	}

	const [data, setData] = useState<BagType>(initialState)

	const clear = () => {
		setData({ productName: '', description: '', brand: '', pieces: 0, price: 0, tags: '' })
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const queryClient = useQueryClient()

	// to add a new bag
	const { isPending, mutate } = useMutation({
		mutationFn: async (newBag: any) => {
			await axios.post('/api/bag/', { ...newBag })
		},
		onError: () => {
			toast.error('Can not add new bag. Try again.')
		},
		onMutate: async newBag => {
			const bags = queryClient.getQueryData(['bags']) as BagType[]
			queryClient.setQueryData(['bags'], [...bags, newBag])

			queryClient.invalidateQueries({ queryKey: ['bags'], exact: true })
		},
		onSuccess: async () => {
			clear()
			toast.success('Bag added successfully')
		}
	})

	// to update a bag
	const { isPending: updateLoading, mutate: updateMutate } = useMutation({
		mutationFn: async (updateBag: any) => {
			await axios.put('/api/bag', { id: bag.id, ...updateBag })
		},
		onError: () => {
			toast.error('Can not update bag. Try again.')
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['bags'], exact: true })
		},
		onSuccess: async () => {
			clear()
			toast.success('Bag has been updated')
			setBag(data)
			router.refresh()
		}
	})

	const handleSubmit = () => {
		const { success } = addBagSchema.safeParse(data)

		if(!success) {
			toast.error('Enter a valid data to input.')

			return
		}

		if(isEditMode) {
			updateMutate(data)

			return
		}

		mutate(data)
	}

	const isLoading = isEditMode ? updateLoading : isPending

	return (
		<div className="black text-[12px] flex-grow">
			<p className="mb-1">Product Name</p>
			<Input disabled={isLoading} name="productName" onChange={e => handleChange(e)} value={data.productName} />
			<p className="mt-3">Description</p>
			<textarea disabled={isLoading} className={`${isLoading ? 'bg-gray-100 text-gray-300' : 'main-bg'} resize-none outline-none w-full p-1 px-2 mt-1 h-[100px] scroll`} name="description" onChange={e => handleChange(e)} value={data.description}></textarea>
			<div className="flex mt-3 w-full">
				<div className="flex flex-col flex-grow mr-3">
					<p>Brand</p>
					<Input disabled={isLoading} name="brand" onChange={e => handleChange(e)} value={data.brand} />
				</div>
				<div className="flex flex-col flex-grow">
					<p>Price</p>
					<Input disabled={isLoading} name="price" onChange={e => setData({ ...data, price: Number(e.target.value) })} value={data.price} />
				</div>
			</div>
			<p className="mt-3">Tags</p>
			<Input disabled={isLoading} name="tags" onChange={e => handleChange(e)} value={data.tags} />
			<div className="flex">
				<Button disabled={isLoading} onClick={handleSubmit} text={isEditMode ? "Edit" : "Add"} width="w-[90%]" />
				<Button disabled={isLoading} isBlack={false} onClick={clear} text="Clear" width="w-[90%]" />
			</div>
		</div>
	)
}

export default BagForm
