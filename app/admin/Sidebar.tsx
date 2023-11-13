'use client'

import { IconType } from 'react-icons'
import { AiFillSetting, AiOutlineSetting, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSolidDashboard } from 'react-icons/bi'
import { BsBox, BsBoxFill, BsFillCartFill, BsPeople, BsPeopleFill } from 'react-icons/bs'
import { LuLayoutDashboard } from 'react-icons/lu'
import { TbSquareLetterE } from 'react-icons/tb'

import useSidebarCategory from '@/hooks/useSidebarCategory'

interface SidebarCategoryProps {
	activeIcon: IconType
	icon: IconType
	onClick: () => void
	text: string
}

const Sidebar = () => {
	const { category, setCategory } = useSidebarCategory()

	const SidebarCategory = ({ activeIcon: ActiveIcon, icon: Icon, onClick, text }: SidebarCategoryProps) => {
		const isActive = category === text

		return (
			<div onClick={onClick} className={`flex-v-center cursor-pointer p-1 pl-2 mb-3 black rounded-s-xl ${isActive ? 'main-bg' : 'hover'}`}>
				{isActive ? <ActiveIcon size={13} /> : <Icon size={13} /> }
				<p className={`mt-[1px] ml-2 text-[12px] ${isActive ? 'font-bold' : ''}`}>{text}</p>
			</div>
		)
	}

	return (
		<div className="card h-full w-[200px] p-3 pr-0 flex flex-col justify-between">
			<div>
				<SidebarCategory activeIcon={BiSolidDashboard} icon={LuLayoutDashboard} onClick={() => setCategory('Dashboard')} text="Dashboard" />
				<SidebarCategory activeIcon={BsFillCartFill} icon={AiOutlineShoppingCart} onClick={() => setCategory('Transactions')} text="Transactions" />
				<SidebarCategory activeIcon={BsBoxFill} icon={BsBox} onClick={() => setCategory('Products')} text="Products" />
				<SidebarCategory activeIcon={BsPeopleFill} icon={BsPeople} onClick={() => setCategory('Customers')} text="Customers" />
				<SidebarCategory activeIcon={AiFillSetting} icon={AiOutlineSetting} onClick={() => setCategory('Settings')} text="Settings" />
			</div>
			<div className="flex-v-center black">
				<TbSquareLetterE />
				<p className="text-sm ml-1">The Bag Therapy</p>
			</div>
		</div>
	)
}

export default Sidebar
