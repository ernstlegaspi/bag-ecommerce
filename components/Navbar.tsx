'use client'

import Image from 'next/image'

import { AiOutlineBell, AiOutlineMail } from 'react-icons/ai'
import { IoMdMenu } from 'react-icons/io'

import Icon from './Icon'

const Navbar = () => {
	return (
		<div className="bg-white rounded-xl full-flex black p-2">
			<Icon icon={IoMdMenu} />
			<div className="flex-v-center">
				<Icon icon={AiOutlineMail} />
				<Icon icon={AiOutlineBell} />
				<Image className="cursor-pointer mr-2 ml-1 rounded-full" alt="Admin Icon" src='/img/placeholder.jpg' width={20} height={20} />
			</div>
		</div>
	)
}

export default Navbar