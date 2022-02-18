import React from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import Activities from 'components/activities'
import DateBlock from 'components/date'
import Status from 'components/status'
import { EBlocks } from 'store/modules/modals/types'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setActiveHeaderBlock } from 'store/modules/modals/reducer'
import magicNumbers from 'magicNumbers'

function Header() {
	const active = useAppSelector(state => state.modals.activeBlock)
	const dispatch = useAppDispatch()

	const onBlock = (name: EBlocks) => {
		dispatch(setActiveHeaderBlock(name))
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
	height: ${magicNumbers.HEADER_HEIGHT}px;
	display: flex;
	justify-content: space-between;
	color: ${colors.primaryText};
	background-color: ${colors.primaryBackground};
	font-size: 14px;
`
export default Header
