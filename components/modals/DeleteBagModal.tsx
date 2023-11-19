'use client'

import axios from "axios"

import { IoWarningOutline } from "react-icons/io5"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import UseDeleteModal from "@/hooks/useDeleteModal"

import FloatingModal from "../FloatingModal"
import Button from "../Button"
import toast from "react-hot-toast"

import { BagType } from "@/constants"

const DeleteBagModal = ({ bagDetails }: { bagDetails: { bagId: string | undefined, bagName: string } }) => {
	const { toggle } = UseDeleteModal()
	const { bagId, bagName } = bagDetails

	const queryClient = useQueryClient()
	
	const { isPending, mutate } = useMutation({
		mutationFn: async (data: any) => {
			await axios.delete(`/api/bag/${data?.id}`)
		},
		onError: (err, post, context: { prevBags: BagType[] } | undefined) => {
			toast.error(`Error deleting ${bagName}`)

			queryClient.setQueryData(['bags'], context?.prevBags)
		},
		onMutate: async deletedBag => {
			await queryClient.cancelQueries({ queryKey: ['bags'] })

			const prevBags = queryClient.getQueryData(['bags']) as BagType[]

			queryClient.setQueryData(['bags'], prevBags.filter(bag => bag.id !== deletedBag.id))

			toast.success('Bag deleted successfully.')
			toggle(false)

			return { prevBags }
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['bags'], exact: true })
		}
	})
	
	const Buttons = () => <div className="bg-gray-200/30 px-2 pb-3 pt-1 rounded-b-xl flex justify-end">
		<Button disabled={isPending} width="w-[70px]" onClick={() => toggle()} text="Cancel" />
		<Button disabled={isPending} customClass="bg-red-400 text-white" width="w-[70px]" onClick={() => mutate({ id: bagId })} text="Delete" />
	</div>

	const Message = () => <div>
		<p className="text-sm font-bold">Delete Bag</p>
		<p className="text-[12px]">Are you sure you want to delete <span className="font-bold text-sm">{bagName}</span>?</p>
	</div>

	return (
		<FloatingModal className="w-[400px]">
			<div className="flex p-3">
				<IoWarningOutline size={25} className="mt-[2px] text-red-400 mr-3" />
				<Message />
			</div>
			<Buttons />
		</FloatingModal>
	)
}

export default DeleteBagModal
