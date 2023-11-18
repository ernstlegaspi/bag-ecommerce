const FloatingModal = ({ children, className }: { children: React.ReactNode, className: string }) => {
	return (
		<div className="inset-0 absolute bg-black/50 flex-center z-50">
			<div className={`${className} card`}>
				{children}
			</div>
		</div>
	)
}

export default FloatingModal
