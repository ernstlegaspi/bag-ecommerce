'use client'

import { IconType } from 'react-icons'
import { AiOutlineInbox, AiOutlineSetting, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { LuLayoutDashboard } from 'react-icons/lu'


const Sidebar = () => {
	const SidebarFeatures = ({ icon: Icon, onClick, text }: { icon: IconType, onClick: () => void, text: string }) => (
		<div onClick={onClick} className="hover flex-v-center cursor-pointer rounded p-1 mb-2 black">
			<Icon size={13} />
			<p className="mt-[1px] ml-2 text-[12px]">{text}</p>
		</div>
	)
	
	return (
		<div className="bg-white h-full w-[200px] rounded-xl p-2">
			<SidebarFeatures icon={LuLayoutDashboard} onClick={() => {}} text="Dashboard" />
			<SidebarFeatures icon={AiOutlineShoppingCart} onClick={() => {}} text="Transactions" />
			<SidebarFeatures icon={AiOutlineInbox} onClick={() => {}} text="Products" />
			<SidebarFeatures icon={BsPeople} onClick={() => {}} text="Customers" />
			<SidebarFeatures icon={AiOutlineSetting} onClick={() => {}} text="Settings" />
		</div>
	)
}

export default Sidebar