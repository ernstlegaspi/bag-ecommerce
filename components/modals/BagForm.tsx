import { ChangeEvent, FormEvent, useState } from "react"

import axios from 'axios'
import toast from 'react-hot-toast'

import Button from '@/components/Button'
import Input from "../Input"

import { addBagSchema } from "@/lib/schema"

const BagForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [data, setData] = useState({ productName: '', description: '', brand: '', pieces: 0, price: 0, tags: '' })

	const clear = () => {
		setData({ productName: '', description: '', brand: '', pieces: 0, price: 0, tags: '' })
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleSubmit = async () => {
		setIsSubmitting(true)

		try {
			const { success } = addBagSchema.safeParse(data)

			if(!success) {
				toast.error('Enter a valid data to input.')
				setIsSubmitting(false)

				return
			}
			
			await axios.post('/api/bag/', { ...data })

			toast.success(`Added ${data.productName}`)
			setIsSubmitting(false)
		}
		catch(error) {
			setIsSubmitting(false)
			toast.error('Can not add new bag. Try again.')
		}
	}

	return (
		<div className="black text-[12px] flex-grow">
			<p className="mb-1">Product Name</p>
			<Input disabled={isSubmitting} name="productName" onChange={e => handleChange(e)} value={data.productName} />
			<p className="mt-3">Description</p>
			<textarea disabled={isSubmitting} className={`${isSubmitting ? 'bg-gray-100 text-gray-300' : 'main-bg'} resize-none outline-none w-full p-1 px-2 mt-1 h-[100px] scroll`} name="description" onChange={e => handleChange(e)} value={data.description}></textarea>
			<div className="flex mt-3 w-full">
				<div className="flex flex-col flex-grow mr-3">
					<p>Brand</p>
					<Input disabled={isSubmitting} name="brand" onChange={e => handleChange(e)} value={data.brand} />
				</div>
				<div className="flex flex-col flex-grow">
					<p>Price</p>
					<Input disabled={isSubmitting} name="price" onChange={e => setData({ ...data, price: Number(e.target.value) })} value={data.price} />
				</div>
			</div>
			<p className="mt-3">Tags</p>
			<Input disabled={isSubmitting} name="tags" onChange={e => handleChange(e)} value={data.tags} />
			<div className="flex">
				<Button disabled={isSubmitting} onClick={handleSubmit} text="Add" width="w-[90%]" />
				<Button disabled={isSubmitting} isBlack={false} onClick={clear} text="Clear" width="w-[90%]" />
			</div>
		</div>
	)
}

export default BagForm
