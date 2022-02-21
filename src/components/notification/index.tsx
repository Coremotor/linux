import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as NoNotificationIcon } from 'assets/icons/preferences-system-notifications-symbolic.svg'
import colors from 'styles/colors'
import Switch from 'components/switch'

const notifications = []

function Notification() {
	const [checked, setChecked] = useState<boolean>(false)
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setChecked(e.currentTarget.checked)

	return (
		<Container>
			{notifications.length > 0 ? (
				<Notifications>Notifications</Notifications>
			) : (
				<NoNotification>
					<StyledNoNotificationIcon />
					<span>No Notifications</span>
				</NoNotification>
			)}
			<CB>
				<Text>Do Not Disturb</Text>
				<Switch
					id='disturb'
					name='disturb'
					checked={checked}
					onChange={onChange}
				/>
			</CB>
		</Container>
	)
}

export default Notification

const Container = styled.div`
	height: 92%;
	display: flex;
	flex-direction: column;
	padding: 16px;
`
const NoNotification = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const StyledNoNotificationIcon = styled(NoNotificationIcon)`
	& path {
		fill: ${colors.icons};
	}
	margin-bottom: 6px;
`
const Notifications = styled.div`
	height: 100%;
	overflow-y: auto;
`
const CB = styled.div`
	display: flex;
	align-items: center;
`
const Text = styled.span`
	margin-top: 6px;
	margin-right: 6px;
`
