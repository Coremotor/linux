import React, { FC } from 'react'

type TProps = {
	name: string
}

const Folder: FC<TProps> = ({ name }) => {
	return <div>{name}</div>
}

export default Folder
