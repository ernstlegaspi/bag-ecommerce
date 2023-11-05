import { IconType } from 'react-icons'

export default function Icon({ icon: IIcon }: { icon: IconType }) {
	return (
		<div className="hover p-[5px] rounded-full">
			<IIcon />
		</div>
	)
}
