'use client'

import { ChangeEvent } from "react"

interface InputProps {
	disabled?: boolean
	hasBg?: boolean
	name: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: string
	value: string | number
	width?: string
}

const Input = ({ disabled, hasBg = true, name, width = "w-full", placeholder, type = "text", value, onChange }: InputProps) => {
	return (
		<input disabled={disabled}
			className={`
				${disabled ? 'bg-gray-100 text-gray-300' : hasBg ? 'main-bg' : 'border-b border-gray-300'}
				${width}
				p-1 px-2 outline-none text-[12px] placeholder:text-[12px]
			`}
			name={name} placeholder={placeholder} value={value} onChange={onChange} type={type}
		/>
	)
}

export default Input