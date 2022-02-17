import React, { ReactNode } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'

type TProps = {
	isActive: boolean
	children: ReactNode
	onClick: () => void
}

function HeaderBlocks({ children, isActive, onClick }: TProps) {
	return (
		<Container onClick={onClick} $active={isActive}>
			{children}
		</Container>
	)
}

type TStyledProps = {
	$active?: boolean
}

const Container = styled.div`
	position: relative;
	cursor: default;
	border-bottom: ${(props: TStyledProps) =>
		props.$active
			? `3px solid ${colors.headersBlocksBorder}`
			: '3px solid transparent'};
	padding: 5px 10px;
`

export default HeaderBlocks
