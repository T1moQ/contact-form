import { FC, ReactNode, useState } from 'react'
import { Input } from './input'
import { Radio } from './radio'
import { Textarea } from './textarea'
import { Checkbox } from './checkbox'
import { useForm } from 'react-hook-form'
import { FormValues } from '../utils/types'
import { SuccessBanner } from './success-banner'

export const Form: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>()

	const onSubmit = (data: unknown) => {
		console.log('Форма отправлена', data)
		reset()
		setSuccessMessage(<SuccessBanner className="fixed z-30 top-4 left-0" />)
		setTimeout(() => setSuccessMessage(null), 5000)
	}

	const [successMessage, setSuccessMessage] = useState<ReactNode | null>(null)

	return (
		<>
			{successMessage}
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<Input
					name="firstName"
					register={register}
					error={errors.firstName}
					lable="First Name"
					type="text"
					required
					className="mt-6"
				/>
				<Input
					name="lastName"
					register={register}
					error={errors.lastName}
					lable="Last Name"
					type="text"
					required
					className="mt-6"
				/>
				<Input
					lable="Email Address"
					type="email"
					error={errors.email}
					name="email"
					register={register}
					required
					className="mt-6"
				/>
				<Radio
					name="queryType"
					register={register}
					error={errors.queryType}
					options={['General Enquiry', 'Support Request']}
					lable="Query Type"
					required
					className="mt-6"
				/>
				<Textarea
					name="message"
					register={register}
					error={errors.message}
					label="Message"
					required
					className="mt-6"
				/>
				<Checkbox
					name="consent"
					register={register}
					error={errors.consent}
					lable="I consent to being contacted by the team"
					className="mt-9"
					required
				/>
				<button
					type="submit"
					className="text-neutral-white font-bold bg-primary-green-600 py-4 px-6 rounded-lg mt-10 w-full hover:bg-[#063f36]"
				>
					Submit
				</button>
			</form>
		</>
	)
}
