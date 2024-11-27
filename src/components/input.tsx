import { FC } from 'react'

type InputProps = {
	className?: string
	lable: string
	type?: string
	required?: boolean
}

export const Input: FC<InputProps> = ({ className, lable, type, required }) => {
	return (
		<div className={`flex flex-col items-start ${className}`}>
			<label className="text-[16px] text-primary-green-600">
				{lable} {required && '*'}
			</label>
			<input
				type={type}
				required={required}
				className="border border-primary-green-600 mt-2 rounded-lg p-3 w-full"
			/>
		</div>
	)
}
