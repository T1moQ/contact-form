import { FC, SVGAttributes } from 'react'

export const Check: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.8604 6.86066C15.1533 7.15355 15.1533 7.62843 14.8604 7.92132L9.6424 13.1394C9.50175 13.28 9.31098 13.359 9.11207 13.359C8.91316 13.359 8.72239 13.28 8.58174 13.1394L5.97272 10.5303C5.67983 10.2374 5.67983 9.76257 5.97272 9.46968C6.26561 9.17679 6.74049 9.17679 7.03338 9.46968L9.11207 11.5484L13.7998 6.86066C14.0927 6.56777 14.5675 6.56777 14.8604 6.86066Z"
				fill="#FFFFF"
			/>
		</svg>
	)
}
