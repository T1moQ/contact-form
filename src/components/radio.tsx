import { FC, useState } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { FormValues } from '../icons/utils/types'

type RadioProps = {
	lable?: string
	required?: boolean
	className?: string
	options: string[]
	error?: FieldError
	name: keyof FormValues
	register: UseFormRegister<FormValues>
}

export const Radio: FC<RadioProps> = ({
	lable,
	required,
	className,
	options,
	error,
	name,
	register,
}) => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null)

	return (
		<div className={`flex flex-col items-start ${className}`}>
			<label className="text-[16px] text-primary-green-600">
				{lable} {required && '*'}
			</label>
			{options.map((option) => (
				<div
					key={option}
					className={`${
						selectedOption === option ? 'bg-primary-green-200' : ''
					} border border-primary-green-600 mt-5 rounded-lg p-3 pl-6 w-full grid cursor-pointer`}
					onClick={() => setSelectedOption(option)}
				>
					<input
						{...register(name, {
							required: 'Please select a query type',
						})}
						type="radio"
						required={required}
						value={option}
						className="appearance-none col-start-1 row-start-1 peer w-5 h-5 rounded-full border-2 border-primary-green-600 checked:border-primary-green-600 cursor-pointer"
						name={lable}
						checked={selectedOption === option}
						onChange={() => setSelectedOption(option)}
					/>
					<div className="col-start-1 row-start-1 w-3 h-3 mt-1 ml-1 rounded-full pointer-events-none peer-checked:bg-primary-green-600" />
					<span className="text-[16px] text-primary-green-600 col-start-2 row-start-1 -ml-24">
						{option}
					</span>
				</div>
			))}
			{error && (
				<span className="error mt-2 text-primary-red">{error.message}</span>
			)}
		</div>
	)
}
