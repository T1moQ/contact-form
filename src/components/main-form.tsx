import { FC } from 'react'
import { Form } from './form'

export const MainForm: FC = () => {
	return (
		<main className="mx-4 my-8 rounded-xl px-6 py-5 bg-neutral-white lg:w-[732px] lg:py-8 lg:px-10 lg:mx-auto lg:mt-32">
			<h1 className="text-[32px] lg:font-normal font-bold text-primary-green-600">
				Contact Us
			</h1>
			<Form />
		</main>
	)
}
