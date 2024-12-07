import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { FormValues } from '../utils/types'
import cn from 'classnames'

type InputProps = {
	className?: string
	lable?: string
	type?: string
	required?: boolean
	name: keyof FormValues
	register: UseFormRegister<FormValues>
	error?: FieldError
}

export const Input: FC<InputProps> = ({
	className,
	lable,
	type,
	required,
	register,
	name,
	error,
}) => {
	return (
		<div className={`flex flex-col items-start ${className}`}>
			<label className="text-[16px] text-primary-green-600">
				{lable} {required && '*'}
			</label>
			<input
				{...register(name, {
					required: 'This field is required',
					pattern: {
						value:
							type === 'email'
								? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
								: /^[a-zA-Z0-9\s]+$/,
						message: 'Please enter a valid email address',
					},
				})}
				type={type}
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
