'use client'

type ButtonType = "button" | "submit" | "reset" | undefined

interface ButtonProps {
	buttonType?: ButtonType
	isBlack?: boolean
	onClick: () => void
	text: string
	width: string
}

const Button = ({ buttonType = "button", isBlack = true, onClick, text, width }: ButtonProps) => {
	const classNames = `${isBlack ? 'bg-sblack text-white' : 'border hover-black hover:text-white'} ${width} px-2 text-[12px] pointer rounded py-1 mt-3 text-center mr-1`

	if(buttonType === 'submit') return <button className={classNames} type="submit">{text}</button>

	return <button onClick={onClick} className={classNames}>{text}</button>
}

export default Button