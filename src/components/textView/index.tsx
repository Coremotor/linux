import React, { FC } from 'react'
import WindowHeader from 'components/windowHeader'
import styled from 'styled-components'
import colors from 'styles/colors'

type TProps = {
	onClose: () => void
	content: React.ReactNode
}

const TextView: FC<TProps> = ({ onClose, content }) => {
	return (
		<Container>
			<WindowHeader onClose={onClose} />
			<Content>{content}</Content>
		</Container>
	)
}

export default TextView

const Container = styled.div`
	width: 50vw;
	//height: 60vh;
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 200px;
	left: 40px;

	@media (max-width: 768px) {
		width: 90vw;
	}
`
const Content = styled.div`
	flex-grow: 1;
	background-color: ${colors.secondaryBackground};
	overflow: auto;
	padding: 0 20px 20px;
`
