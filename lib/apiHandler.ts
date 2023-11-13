import { NextResponse } from "next/server"

interface CatchErrorProps {
	callback: () => void
	serverErrorCode?: number
	serverErrorMessage?: string
}

export const catchError = ({ callback, serverErrorCode = 500, serverErrorMessage = 'Internal Server Error' }: CatchErrorProps) => {
	try {
		return callback()
	}
	catch(error) {
		return new NextResponse(serverErrorMessage, { status: serverErrorCode })
	}
}
