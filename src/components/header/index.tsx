import React, { useState } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import Activities from 'components/activities'
import DateBlock from 'components/date'
import Status from 'components/status'

enum EBlocks {
	activities = 'activities',
	date = 'date',
	status = 'status',
}

function Header() {
	const [active, setActive] = useState<EBlocks | null>(null)
	const onBlock = (name: EBlocks) => {
		setActive(name)
	}
	return (
		<Container>
			<Activities
				onClick={() => onBlock(EBlocks.activities)}
				isActive={active === EBlocks.activities}
			/>
			<DateBlock
				onClick={() => onBlock(EBlocks.date)}
				isActive={active === EBlocks.date}
			/>
			<Status
				onClick={() => onBlock(EBlocks.status)}
				isActive={active === EBlocks.status}
			/>
		</Container>
	)
}
const Container = styled.header`
	display: flex;
	justify-content: space-between;
	color: ${colors.primaryText};
	background-color: ${colors.primaryBackground};
	font-size: 14px;
`
export default Header
