import React, { useState } from 'react'
import styled from 'styled-components'
import { days_full, months_full } from 'helpers/dates'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendar.css'

import { format } from 'date-fns'

type TProps = {
	date: Date
}

function Datepicker({ date }: TProps) {
	const [value, onChange] = useState(date)
	return (
		<Container>
			<CurrentDate>
				<Text>{days_full[date.getDay()]}</Text>
				<TextWrapper>
					<TextBold>{months_full[date.getMonth()]}</TextBold>
					<TextBold>{date.getDate()}</TextBold>
					<TextBold>{date.getFullYear()}</TextBold>
				</TextWrapper>
			</CurrentDate>
			<Calendar
				onChange={onChange}
				value={value}
				calendarType='US'
				locale='en-US'
				prev2Label={null}
				next2Label={null}
				formatShortWeekday={(locale, date) => format(date, 'eeeee')}
				formatMonthYear={(locale, date) => format(date, 'MMMM')}
			/>
		</Container>
	)
}

export default Datepicker

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
`
const CurrentDate = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`
const Text = styled.span`
	font-size: 16px;
	margin-bottom: 4px;
`
const TextWrapper = styled.div`
	display: flex;
`
const TextBold = styled.span`
	font-size: 20px;
	font-weight: 500;
	margin-right: 6px;
`
