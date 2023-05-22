import React, { FC, useState } from 'react'
import styled from 'styled-components'
import WindowHeader from 'components/windowHeader'
import colors from 'styles/colors'

type TProps = {
	onClose: () => void
	src: string
}

const ImageView: FC<TProps> = ({ onClose, src }) => {
	const [scale, setScale] = useState(70)
	const scaleUp = () => setScale(prevState => prevState + 5)
	const scaleDown = () => setScale(prevState => prevState - 5)

	return (
		<Container>
			<WindowHeader onClose={onClose} />
			<Content>
				<Image src={src} alt='image' $scale={scale} />
			</Content>
			<Scale>
				<div onClick={scaleUp}>UP</div>
				<div onClick={scaleDown}>DOWN</div>
			</Scale>
		</Container>
	)
}

export default ImageView

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 40px;
	right: 40px;
	bottom: 40px;
	left: 40px;
	border-radius: 8px;
`
const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	background-color: ${colors.primaryBackground};
	overflow: auto;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
`
const Image = styled.img<{ $scale: number }>`
	width: ${props => props.$scale}%;
`
const Scale = styled.div`
	position: absolute;
	background-color: white;
	top: 50px;
	right: 50px;
`
