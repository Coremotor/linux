import React from 'react'
import HeaderBlocks from 'layouts/headerBlocks'

type TProps = {
	onClick: () => void
	isActive: boolean
}

function Status({ onClick, isActive }: TProps) {
	return (
		<HeaderBlocks isActive={isActive} onClick={onClick}>
			Status
		</HeaderBlocks>
	)
}

export default Status
