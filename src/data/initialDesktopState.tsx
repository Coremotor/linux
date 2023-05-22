import Folder from 'components/folder'
import React from 'react'
import { nirFolderContent } from 'data/nir'
import { uwFolderContent } from 'data/uw'

export const initialDesktopState = [
	{
		id: `id${0}`,
		order: 0,
		el: <Folder name='Умные краны' content={uwFolderContent} />,
	},
	{
		id: `id${1}`,
		order: 1,
		el: <Folder name='АСУ ДОЗ' content={['string 1']} />,
	},
	{
		id: `id${2}`,
		order: 2,
		el: <Folder name='ОКС Админ' content={['string 2']} />,
	},
	{
		id: `id${3}`,
		order: 3,
		el: <Folder name='ОКС ЛК' content={['string 3']} />,
	},
	{
		id: `id${4}`,
		order: 4,
		el: <Folder name='ОКС Веб портал' content={['string 4']} />,
	},
	{
		id: `id${5}`,
		order: 5,
		el: <Folder name='НИР' content={nirFolderContent} />,
	},
]
