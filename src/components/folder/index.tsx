import React, { FC, useState } from 'react'
import styled from 'styled-components'
import img from 'assets/images/folder.png'
import colors from 'styles/colors'
import { createPortal } from 'react-dom'
import FolderWindow from 'components/folderWindow'

type TProps = {
	name: string
	content: any[]
}

const Folder: FC<TProps> = ({ name, content }) => {
	const [showContent, setShowContent] = useState(false)
	const onDoubleClick = () => setShowContent(true)
	const closeWindow = () => setShowContent(false)

	return (
		<>
			<Container onDoubleClick={onDoubleClick}>
				<Image src={img} alt='icon' />
				<Text>{name}</Text>
			</Container>

			{showContent &&
				createPortal(
					<FolderWindow content={content} onClose={closeWindow} />,
					document.body
				)}
		</>
	)
}

export default Folder

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`
const Image = styled.img`
	margin-bottom: 5px;
`
const Text = styled.span`
	width: 90%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 16px;
	color: ${colors.primaryText};
	text-shadow: 1px 1px 2px black;
`
