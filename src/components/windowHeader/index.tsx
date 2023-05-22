import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'assets/icons/window-close-symbolic.svg'

type TProps = {
	onClose: () => void
	title?: string
}

const WindowHeader: FC<TProps> = ({ onClose, title }) => {
	return (
		<Header>
			<div>{title || ''}</div>
			<Close onClick={onClose}>x</Close>
		</Header>
	)
}

export default WindowHeader

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: #ebebeb;
	border-bottom: 1px solid #c2c2c2;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	padding: 10px 10px;
`
const Close = styled(CloseIcon)`
	width: 20px;
	height: 20px;
	background-color: #dadada;
	padding: 2px;
	border-radius: 50%;
`
