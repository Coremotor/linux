import React, { FC } from 'react'
import styled from 'styled-components'
import img from 'assets/images/folder.png'
import colors from 'styles/colors'

type TProps = {
	name: string
	onDoubleClick?: () => void
}

const Folder: FC<TProps> = ({ name, onDoubleClick }) => {
	return (
		<Container onDoubleClick={onDoubleClick}>
			<Image src={img} alt='icon' />
			<Text>{name}</Text>
		</Container>
	)
}

export default Folder

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Image = styled.img`
	margin-bottom: 5px;
`
const Text = styled.span`
	color: ${colors.primaryText};
	text-shadow: 1px 1px 2px black;
`
