import React, { FC } from 'react'

type TProps = {
	content: any[]
}

const FolderWindow: FC<TProps> = ({ content }) => {
	return (
		<div>
			<div>{content.map(item => item)}</div>
		</div>
	)
}

export default FolderWindow
