'use client'

import Image from "next/image"
import toast from "react-hot-toast"

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

import Button from "./Button"
import Input from "./Input"

import { authSchema } from "@/lib/schema"
import axios from "axios"

/*
e£ct*,5I46P825VNuqR%!>&
*/

const Auth = () => {
	const router = useRouter()
	const [data, setData] = useState({ email: '', password: '' })

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const { success } = authSchema.safeParse(data)

			if(!success) {
				toast.error('Enter a valid email or password.')

				return
			}

			const res = await signIn('credentials', { ...data, redirect: false })

			console.log(res)
			
			if(!res?.ok) toast.error('Invalid email or password.')

			router.push('/admin')
		}
		catch(e: any) {
			toast.error(e.response.status === 400 ? 'Invalid Credentials.' : `Server error. Please try again.`)
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	return (
		<div className="w-full h-full flex-center main-bg">
			<div className="card shadow shadow-black/30 w-[220px]">
				<form onSubmit={handleSubmit} className='w-full px-4 pt-4 pb-8 flex-col flex-center'>
					<Image alt="The Bag Therapy" src="/img/bag1.png" width={100} height={100} />
					<h1 className="text-lg font-bold mb-3">The Bag Therapy</h1>
					<Input hasBg={false} name="email" value={data.email} onChange={handleChange} placeholder="Email" type="email" />
					<div className="mb-3"></div>
					<Input hasBg={false} name="password" value={data.password} onChange={handleChange} placeholder="Password" type="password" />
					<Button buttonType="submit" onClick={() => {}} text="Login" width="w-full" />
				</form>
			</div>
		</div>
	)
}

export default Auth
