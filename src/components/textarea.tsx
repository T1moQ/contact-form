import { FC } from 'react'
import { FormValues } from '../icons/utils/types'
import { FieldError, UseFormRegister } from 'react-hook-form'
import cn from 'classnames'

type TextareaProps = {
	className?: string
	label: string
	required?: boolean
	name: keyof FormValues
	register: UseFormRegister<FormValues>
	error?: FieldError
}

export const Textarea: FC<TextareaProps> = ({
	className,
	label,
	required,
	name,
	register,
	error,
}) => {
	return (
		<div className={`flex flex-col items-start ${className}`}>
			<label className="text-[16px] text-primary-green-600">
				{label} {required && '*'}
			</label>
			<textarea
				{...register(name, {
					required: 'This field is required',
				})}
				rows={9}
				required={required}
				className={cn(
					'border border-neutral-grey-500 mt-2 rounded-lg p-3 w-full outline-none focus:border-primary-green-600 hover:border-[#063f36]',
					error && 'border-primary-red'
				)}
			/>
			{error && (
				<span className="error mt-2 text-primary-red">{error.message}</span>
			)}
		</div>
	)
}
