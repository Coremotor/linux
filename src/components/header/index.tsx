import React from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'

const Container = styled.header`
	color: ${colors.headerText};
	background-color: ${colors.headerBg};
	padding: 5px 0;
`

function Header() {
	return <Container>header</Container>
}

export default Header
