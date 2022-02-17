import React from 'react'
import HeaderBlocks from 'layouts/headerBlocks'

type TProps = {
	onClick: () => void
	isActive: boolean
}

function Activities({ onClick, isActive }: TProps) {
	return (
		<HeaderBlocks isActive={isActive} onClick={onClick}>
			Activities
		</HeaderBlocks>
	)
}

export default Activities
