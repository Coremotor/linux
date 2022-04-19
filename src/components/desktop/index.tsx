import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Item, createGrid, sortList } from 'helpers/buildDesktop'
import Folder from 'components/folder'

const initialState = [
	{
		id: `id${0}`,
		order: 0,
		el: <Folder name='folder' />,
	},
	{
		id: `id${10}`,
		order: 10,
		el: <Folder name='folder2' />,
	},
	{
		id: `id${20}`,
		order: 20,
		el: <Folder name='folder3' />,
	},
]

function Desktop() {
	const [grid, setGrid] = useState<Item[]>(createGrid())
	const [currentGridItem, setCurrentGridItem] = useState<Item | null>(null)

	const dragStart = (ev: React.DragEvent<HTMLDivElement>, item: Item) => {
		setCurrentGridItem(item)
		// ev.currentTarget.style.background = 'lightgray'
	}

	const end = (ev: React.DragEvent<HTMLDivElement>) => {
		ev.currentTarget.style.background = 'inherit'
	}

	const drop = (ev: React.DragEvent<HTMLDivElement>, item: Item) => {
		ev.preventDefault()
		if (currentGridItem) {
			setGrid(
				grid.map(i => {
					if (i.id === item.id) {
						return { ...i, order: currentGridItem.order }
					}
					if (i.id === currentGridItem.id) {
						return { ...i, order: item.order }
					}
					return i
				})
			)
		}
		ev.currentTarget.style.background = 'inherit'
	}

	const dragOver = (ev: React.DragEvent<HTMLDivElement>) => {
		ev.preventDefault()
		ev.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)'
	}

	useEffect(() => {
		const a = grid
		initialState.forEach(i => {
			a[i.order] = i
		})
		setGrid([...a])
	}, [])

	return (
		<Container>
			{grid.sort(sortList).map(i => (
				<Cell
					key={i.id}
					id={i.id}
					draggable
					onDragStart={ev => dragStart(ev, i)}
					onDragLeave={end}
					onDragEnd={end}
					onDragOver={dragOver}
					onDrop={ev => drop(ev, i)}
				>
					{i.el}
				</Cell>
			))}
		</Container>
	)
}

export default Desktop

const Container = styled.div`
	width: 100%;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(auto-fit, 120px);
`
const Cell = styled.div`
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	font-size: 20px;
`
