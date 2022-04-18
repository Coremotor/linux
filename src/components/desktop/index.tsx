import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Item, makeGrid, sortList } from 'helpers/buildDesktop'

function Desktop() {
	const [grid, setGrid] = useState<Item[]>(makeGrid())
	const [currentItem, setCurrentItem] = useState<Item | null>(null)

	const dragStart = (ev: React.DragEvent<HTMLDivElement>, item: Item) => {
		setCurrentItem(item)
		ev.currentTarget.style.background = 'lightgray'
	}

	const end = (ev: React.DragEvent<HTMLDivElement>) => {
		ev.currentTarget.style.background = 'inherit'
	}

	const drop = (ev: React.DragEvent<HTMLDivElement>, item: Item) => {
		ev.preventDefault()
		if (currentItem) {
			setGrid(
				grid.map(i => {
					if (i.id === item.id) {
						return { ...i, order: currentItem.order }
					}
					if (i.id === currentItem.id) {
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

	useEffect(() => {}, [])

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
					onDoubleClick={e => console.log(e)}
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
	grid-template-columns: repeat(auto-fill, 100px);
`
const Cell = styled.div`
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	font-size: 20px;
`
