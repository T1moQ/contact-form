import { FC } from 'react'
import { Form } from './form'

export const MainForm: FC = () => {
	return (
		<main className="mx-4 my-8 rounded-xl px-6 py-5 bg-neutral-white">
			<h1 className="text-[32px] font-bold text-primary-green-600">
				Contact Us
			</h1>
			<Form />
		</main>
	)
}
