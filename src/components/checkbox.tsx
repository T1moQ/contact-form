import { FC } from 'react'

type CheckboxProps = {
	lable?: string
	required?: boolean
	className?: string
}

export const Checkbox: FC<CheckboxProps> = ({ lable, required, className }) => {
	return (
		<div className={`flex items-center gap-5 ${className}`}>
			<input
				type="checkbox"
				className="appearance-none w-[23px] h-[21px] border-2 rounded-sm border-primary-green-600 checked:bg-primary-green-600"
			/>
			<label className="text-[16px] text-primary-green-600">
				{lable} {required && '*'}
			</label>
		</div>
	)
}
