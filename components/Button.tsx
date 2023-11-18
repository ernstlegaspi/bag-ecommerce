'use client'

type ButtonType = "button" | "submit" | "reset" | undefined

interface ButtonProps {
	buttonType?: ButtonType
	customClass?: string
	disabled?: boolean
	isBlack?: boolean
	onClick: () => void
	text: string
	width: string
}	

const Button = ({ buttonType = "button", customClass, disabled, isBlack = true, onClick, text, width }: ButtonProps) => {
	const classNames = `
		${disabled ? 'cursor-default' : customClass ? customClass : 'pointer hover-black hover:text-white'}
		${isBlack && !customClass ? 'bg-sblack text-white' : customClass ? customClass : 'border'}
		${width} px-2 text-[12px] rounded py-1 mt-3 text-center mr-1
	`

	if(buttonType === 'submit') return <button disabled={disabled} className={classNames} type="submit">{text}</button>

	return <button disabled={disabled} onClick={onClick} className={classNames}>{text}</button>
}

export default Button