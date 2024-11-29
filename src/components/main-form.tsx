import { FC } from 'react'
import { Input } from './input'
import { Radio } from './radio'
import { Textarea } from './textarea'
import { Checkbox } from './checkbox'

export const MainForm: FC = () => {
	return (
		<main className="mx-4 my-8 rounded-xl px-6 py-5 bg-neutral-white">
			<h1 className="text-[32px] font-bold text-primary-green-600">
				Contact Us
			</h1>
			<form action="submit">
				<Input lable="First Name" type="text" required className="mt-6" />
				<Input lable="Last Name" type="text" required className="mt-6" />
				<Input lable="Email Address" type="email" required className="mt-6" />
				<Radio
					options={['General Enquiry', 'Support Request']}
					lable="Query Type"
					required
					className="mt-6"
				/>
				<Textarea label="Message" required className="mt-6" />
				<Checkbox
					lable="I consent to being contacted by the team"
					className="mt-9"
					required
				/>
				<button className="text-neutral-white font-bold bg-primary-green-600 py-4 px-6 rounded-lg mt-10 w-full">
					Submit
				</button>
			</form>
		</main>
	)
}
