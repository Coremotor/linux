import React from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import { ReactComponent as ViewAppIcon } from 'assets/icons/view-app-grid-symbolic.svg'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-image: linear-gradient(
		to top,
		${colors.sidebarBgBottom},
		80%,
		${colors.sidebarBgTop}
	);
	padding: 8px;
`
const Apps = styled.div``
const StyledViewAppIcon = styled(ViewAppIcon)`
	border-radius: 2px;
	& path {
		fill: ${colors.primaryText};
	}
	&:hover {
		background-color: ${colors.bgHover};
	}
`

function SideBar() {
	return (
		<Container>
			<Apps />
			<StyledViewAppIcon />
		</Container>
	)
}

export default SideBar
