import { FC } from 'react'
import { Input } from './input'

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
			</form>
		</main>
	)
}
