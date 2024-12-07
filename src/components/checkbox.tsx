import { FC } from 'react'
import { Check } from '../icons/check'
import { FormValues } from '../icons/utils/types'
import { FieldError, UseFormRegister } from 'react-hook-form'

type CheckboxProps = {
	lable?: string
	required?: boolean
	className?: string
	name: keyof FormValues
	register: UseFormRegister<FormValues>
	error?: FieldError
}

export const Checkbox: FC<CheckboxProps> = ({
	lable,
	required,
	className,
	name,
	register,
	error,
}) => {
	return (
		<div className={`flex flex-col items-start ${className}`}>
			<div className="flex items-center gap-5">
				<input
					{...register(name, {
						required: 'To submit this form, please consent to being contacted',
					})}
					id="checkbox"
					type="checkbox"
					className="appearance-none w-[23px] h-[21px] border-2 rounded-sm border-primary-green-600 checked:bg-primary-green-600 relative cursor-pointer"
				/>
				<Check className="fill-neutral-white absolute w-5 h-5 pointer-events-none" />
				<label
					htmlFor="checkbox"
					className="text-[16px] text-primary-green-600"
				>
					{lable} {required && '*'}
				</label>
			</div>
			{error && (
				<div className="error mt-2 text-primary-red">{error.message}</div>
			)}
		</div>
	)
}
