import React, { FC, useState } from 'react'
import styled from 'styled-components'

type TProps = {
	src: string
	title?: string
	description?: string
}

const ImageFile: FC<TProps> = ({ src, title }) => {
	const [open, setOpen] = useState(false)
	const openFile = () => setOpen(true)
	const closeFile = () => setOpen(false)

	return (
		<Container>
			<Image src={src} />
			<div>{title || ''}</div>
		</Container>
	)
}

export default ImageFile

const Container = styled.div`
	width: 120px;
	height: 120px;
	text-align: center;
	margin: 0 10px 10px 0;
`
const Image = styled.img`
	width: 100px;
	height: 80px;
`
