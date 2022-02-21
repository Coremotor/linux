import React from 'react'
import styled from 'styled-components'
import zIndex from 'styles/zIndexLevels'
import magicNumbers from 'magicNumbers'
import colors from 'styles/colors'
import Notification from 'components/notification'
import Datepicker from 'components/datepicker'
import { useAppDispatch } from 'store/hooks'
import { setActiveHeaderBlock } from 'store/modules/modals/reducer'

type TProps = {
	date: Date
}

function Calendar({ date }: TProps) {
	const dispatch = useAppDispatch()

	const closeWindow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		dispatch(setActiveHeaderBlock(null))
	}

	return (
		<>
			<Trigger onClick={closeWindow} />
			<Window>
				<Triangle />
				<WindowInner>
					<NotificationWrapper>
						<Notification />
					</NotificationWrapper>
					<DatepickerWrapper>
						<Datepicker date={date} />
					</DatepickerWrapper>
				</WindowInner>
			</Window>
		</>
	)
}

export default Calendar

const Trigger = styled.div`
	position: fixed;
	z-index: ${zIndex.levelTop};
	top: ${magicNumbers.HEADER_HEIGHT}px;
	right: 0;
	bottom: 0;
	left: 0;
`

const Window = styled.div`
	position: absolute;
	z-index: ${zIndex.levelTop2};
	display: flex;
	flex-direction: column;
	background-color: ${colors.secondaryBackground};
	border: 1px solid ${colors.primaryBorder};
	border-radius: 10px;
	top: ${magicNumbers.HEADER_HEIGHT + 20}px;
	left: 50%;
	transform: translate(-50%);
	color: ${colors.secondaryText};
	padding: 16px;
`
const Triangle = styled.div`
	height: 0;
	border: 20px solid transparent;
	border-bottom: 18px solid ${colors.secondaryBackground};
	margin: -54px auto 15px;
`
const WindowInner = styled.div`
	height: 100%;
	display: flex;
`
const NotificationWrapper = styled.div`
	width: 500px;
	border-right: 1px solid ${colors.primaryBorder};
`
const DatepickerWrapper = styled.div`
	width: 290px;
`
