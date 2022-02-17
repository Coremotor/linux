import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import months from 'components/date/months'
import HeaderBlocks from 'layouts/headerBlocks'

type TProps = {
	onClick: () => void
	isActive: boolean
}

function DateBlock({ onClick, isActive }: TProps) {
	const [date, setDate] = useState<Date>(new Date())
	const tick = () => setDate(new Date())

	useEffect(() => {
		const intervalId = setInterval(tick, 1000)
		return () => {
			clearInterval(intervalId)
		}
	}, [])

	return (
		<HeaderBlocks isActive={isActive} onClick={onClick}>
			<Text $mr={5}>{months[date.getMonth()]}</Text>
			<Text $mr={10}>{date.getDate()}</Text>
			<Text>{date.getHours()}</Text>
			<Text>:</Text>
			<Text>
				{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
			</Text>
		</HeaderBlocks>
	)
}

type TStyledProps = {
	$mr?: number
}

const Text = styled.span`
	margin-right: ${(props: TStyledProps) => (props.$mr ? `${props.$mr}px` : 0)};
`

export default DateBlock
