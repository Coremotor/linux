import Folder from 'components/folder'
import React from 'react'
import { nirFolderContent } from 'data/nir'
import { uwFolderContent } from 'data/uw'
import { campFolderContent } from 'data/camp'
import { oksAdmFolderContent } from 'data/oks_adm'
import { oksLkFolderContent } from 'data/oks_lk'
import { oksWpFolderContent } from 'data/oks_wp'

export const initialDesktopState = [
	{
		id: `id${0}`,
		order: 0,
		el: <Folder name='Умные краны' content={uwFolderContent} />,
	},
	{
		id: `id${1}`,
		order: 1,
		el: <Folder name='АСУ ДОЗ' content={campFolderContent} />,
	},
	{
		id: `id${2}`,
		order: 2,
		el: <Folder name='ОКС Админ' content={oksAdmFolderContent} />,
	},
	{
		id: `id${3}`,
		order: 3,
		el: <Folder name='ОКС ЛК' content={oksLkFolderContent} />,
	},
	{
		id: `id${4}`,
		order: 4,
		el: <Folder name='ОКС Веб портал' content={oksWpFolderContent} />,
	},
	{
		id: `id${5}`,
		order: 5,
		el: <Folder name='НИР' content={nirFolderContent} />,
	},
]
