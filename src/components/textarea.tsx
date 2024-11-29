import { FC } from 'react'

type TextareaProps = {
	className?: string
	label: string
	required?: boolean
}

export const Textarea: FC<TextareaProps> = ({ className, label, required }) => {
	return (
		<div className={`flex flex-col items-start ${className}`}>
			<label className="text-[16px] text-primary-green-600">
				{label} {required && '*'}
			</label>
			<textarea
				rows={9}
				required={required}
				className="border border-primary-green-600 mt-2 rounded-lg p-3 w-full"
			></textarea>
		</div>
	)
}
