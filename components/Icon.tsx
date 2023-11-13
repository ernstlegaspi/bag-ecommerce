'use client'

import { IconType } from 'react-icons'

export default function Icon({ icon: IIcon, onClick, size }: { icon: IconType, onClick: () => void, size?: number }) {
	return (
		<div onClick={onClick} className="w-max hover p-[5px] rounded-full">
			<IIcon size={size} />
		</div>
	)
}
