import React, { FC } from 'react'
import styled from 'styled-components'
import image from 'assets/images/file.png'

type TProps = {
	title?: string
}

const TextFile: FC<TProps> = ({ children, title }) => {
	return (
		<Container>
			<Image src={image} />
			<div>{title || ''}</div>
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
