import { ChangeEvent, FormEvent, useState } from "react"

import axios from 'axios'
import toast from 'react-hot-toast'

import Button from '@/components/Button'
import Input from "../Input"

const BagForm = () => {
	const [data, setData] = useState({ productName: '', description: '', brand: '', price: 0, tags: '', pieces: 0 })

	const clear = () => {
		setData({ productName: '', description: '', brand: '', price: 0, tags: '', pieces: 0 })
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			await axios.post('/api/bag/', data)
		}
		catch(error) {
			toast.error('Can not add new bag. Try again.')
		}
	}

	return (
		<form onSubmit={handleSubmit} className="black text-[12px] flex-grow">
			<p className="mb-1">Product Name</p>
			<Input name="productName" onChange={e => handleChange(e)} value={data.productName} />
			<p className="mt-3">Description</p>
			<textarea className="resize-none outline-none w-full p-1 px-2 main-bg mt-1 h-[100px] scroll" name="description" onChange={e => handleChange(e)}></textarea>
			<div className="flex mt-3 w-full">
				<div className="flex flex-col flex-grow mr-3">
					<p>Brand</p>
					<Input name="brand" onChange={e => handleChange(e)} value={data.brand} />
				</div>
				<div className="flex flex-col flex-grow">
					<p>Price</p>
					<Input name="price" onChange={e => handleChange(e)} value={data.price} />
				</div>
			</div>
			<p className="mt-3">Tags</p>
			<Input name="tags" onChange={e => handleChange(e)} value={data.tags} />
			<input type="text" className="main-bg w-full p-1 px-2 outline-none" />
			<div className="flex">
				<Button buttonType='submit' onClick={() => {}} text="Add" width="w-[90%]" />
				<Button isBlack={false} onClick={clear} text="Clear" width="w-[90%]" />
			</div>
		</form>
	)
}

export default BagForm
