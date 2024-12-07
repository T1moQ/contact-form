import { FC } from 'react'
import { CheckSuccess } from '../icons/check-success'
import cn from 'classnames'

type SuccessBannerProps = {
	className?: string
}

export const SuccessBanner: FC<SuccessBannerProps> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex flex-col items-start bg-[#063f36] rounded-lg p-6',
				className
			)}
		>
			<div className="flex items-center gap-3">
				<div>
					<CheckSuccess className="stroke-neutral-white w-4 h-4" />
				</div>
				<h3 className="text-neutral-white">Message Sent!</h3>
			</div>
			<p className="text-neutral-grey-500">
				Thank you for compliting the form. We`ll be in touch soon!
			</p>
		</div>
	)
}
