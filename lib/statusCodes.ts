import { NextResponse } from "next/server"

interface StatusProps {
	code?: number
	result?: Object
}

export const success = ({ code = 200, result = {} }: StatusProps) => NextResponse.json(result, { status: code })

export const clientError = ({ code = 400 }: { code?: number }) => new NextResponse(null, { status: code })
