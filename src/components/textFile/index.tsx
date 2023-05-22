import React, { FC, useState } from 'react'
import styled from 'styled-components'
import image from 'assets/images/text.png'
import { createPortal } from 'react-dom'
import TextView from 'components/textView'

type TProps = {
	title?: string
}

const TextFile: FC<TProps> = ({ children, title }) => {
	const [open, setOpen] = useState(false)
	const openFile = () => setOpen(true)
	const closeFile = () => setOpen(false)

	return (
		<Container onDoubleClick={openFile}>
			<Image src={image} />
			<div>{title || ''}</div>

			{open &&
				createPortal(
					<TextView onClose={closeFile} content={children} />,
					document.body
				)}
		</Container>
	)
}

export default TextFile

const Container = styled.div`
	width: 120px;
	height: 120px;
	text-align: center;
	margin: 0 10px 10px 0;
`
const Image = styled.img`
	width: 80px;
	height: 80px;
`
