import React, { FC } from 'react'
import styled from 'styled-components'
import WindowHeader from 'components/windowHeader'

type TProps = {
	onClose: () => void
	content: JSX.Element[]
}

const FolderWindow: FC<TProps> = ({ content, onClose }) => {
	return (
		<Container>
			<WindowHeader onClose={onClose} />
			<Content>{content.map(item => item)}</Content>
		</Container>
	)
}

export default FolderWindow

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	max-height: 400px;
	position: fixed;
	top: 100px;
	left: 100px;
	background-color: white;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
`
const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	overflow: auto;
	background-color: #f1f1f1;
	padding: 20px;
`
