import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderBlocks from 'layouts/headerBlocks'
import Calendar from 'components/calendar'
import { months_short } from 'helpers'

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
			<Text $mr={5}>{months_short[date.getMonth()]}</Text>
			<Text $mr={10}>{date.getDate()}</Text>
			<Text>{date.getHours()}</Text>
			<Text>:</Text>
			<Text>
				{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
			</Text>
			{isActive && <Calendar date={date} />}
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
