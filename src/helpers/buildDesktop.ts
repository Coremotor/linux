export type Item = {
	id: string
	order: number
	el?: JSX.Element
}

export const makeGrid = () => {
	let a: Item[] = []
	for (let i = 0; i < 120; i++) {
		a.push({
			id: `id${i}`,
			order: i,
		})
	}
	return a
}

export const sortList = (a: Item, b: Item) => {
	if (a.order > b.order) {
		return 1
	} else {
		return -1
	}
}
