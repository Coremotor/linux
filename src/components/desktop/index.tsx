import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Item, createGrid, sortList } from 'helpers/buildDesktop'
import { initialDesktopState } from 'components/desktop/initialDesktopState'

function Desktop() {
	const [grid, setGrid] = useState<Item[]>(createGrid())
	const [currentGridItem, setCurrentGridItem] = useState<Item | null>(null)

	const dragStart = (ev: React.DragEvent<HTMLDivElement>, item: Item) => {
		setCurrentGridItem(item)
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
		initialDesktopState.forEach(i => {
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
	height: 100vh;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(auto-fit, 120px);
`
const Cell = styled.div`
	height: 120px;
	width: 120px;
	//border: 1px solid black;
`
