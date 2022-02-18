import React from 'react'
import styled from 'styled-components'
import zIndex from 'styles/zIndexLevels'
import magicNumbers from 'magicNumbers'
import colors from 'styles/colors'

function Calendar() {
	return (
		<>
			<Trigger />
			<Window>
				<Triangle />
			</Window>
		</>
	)
}

export default Calendar

const Trigger = styled.div`
	position: fixed;
	z-index: ${zIndex.levelTop};
	top: ${magicNumbers.HEADER_HEIGHT}px;
	right: 0;
	bottom: 0;
	left: 0;
`

const Window = styled.div`
	width: 300px;
	height: 200px;
	position: absolute;
	z-index: ${zIndex.levelTop2};
	display: flex;
	background-color: ${colors.secondaryBackground};
	border: 1px solid ${colors.primaryBorder};
	border-radius: 10px;
	top: ${magicNumbers.HEADER_HEIGHT + 20}px;
	left: 50%;
	transform: translate(-50%);
`
const Triangle = styled.div`
	height: 0;
	border: 20px solid transparent;
	border-bottom: 18px solid ${colors.secondaryBackground};
	margin: -36px auto 0;
`
