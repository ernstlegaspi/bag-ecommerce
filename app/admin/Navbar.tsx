'use client'

import Image from 'next/image'

import { AiOutlineBell, AiOutlineMail, AiOutlineSearch } from 'react-icons/ai'
import { BsMoon } from 'react-icons/bs'
import { IoMdMenu } from 'react-icons/io'

import Icon from '@/components/Icon'

const Navbar = () => {
	return (
		<div className="card full-flex black p-2 mr-3">
			<div className="flex-v-center">
				<Icon icon={IoMdMenu} onClick={() => {}} />
				<div className="flex-v-center black h-[18px]">
					<input className="w-[300px] outline-none px-1 text-[11px] placeholder:text-gray-300" type="text" placeholder="Search a bag" />
					<div className="hover:bg-black transition-all cursor-pointer h-full bg-sblack flex items-center px-1 text-white">
						<AiOutlineSearch size={13} />
					</div>
				</div>
			</div>
			<div className="flex-v-center">
				<Icon icon={AiOutlineMail} onClick={() => {}} />
				<Icon icon={AiOutlineBell} onClick={() => {}} />
				<Icon icon={BsMoon} onClick={() => {}} size={14} />
				<Image className="cursor-pointer mr-2 ml-1 rounded-full" alt="Admin Icon" src='/img/placeholder.jpg' width={20} height={20} />
			</div>
		</div>
	)
}

export default Navbar