interface CategoryProps {
	children?: React.ReactNode,
	className?: string
	text?: string
}

const CategoryColumn = ({ children, className, text }: CategoryProps) => {
	return (
		<>
			{children ? <div className={`py-1 w-[16%] ${className}`}>
				{children}
			</div> : <div className="py-1 w-[16%]">
				<p>{text}</p>
			</div>}
		</>
	)
}

export default CategoryColumn
