import React from 'react'
import styled from 'styled-components'

type TProps = {
	id: string
	name: string
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Switch({ id, name, checked, onChange }: TProps) {
	return (
		<CheckBoxWrapper>
			<CheckBox
				id={id}
				type='checkbox'
				name={name}
				checked={checked}
				onChange={onChange}
			/>
			<CheckBoxLabel htmlFor={id} />
		</CheckBoxWrapper>
	)
}

export default Switch

const CheckBoxWrapper = styled.div`
	position: relative;
`
const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 42px;
	height: 22px;
	border-radius: 15px;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 22px;
		height: 22px;
		background: #ffffff;
		transition: 0.2s;
	}
`
const CheckBox = styled.input`
	width: 0;
	height: 0;
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	margin: 0;
	&:checked + ${CheckBoxLabel} {
		background: #4fbe79;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 22px;
			height: 22px;
			margin-left: 21px;
			transition: 0.2s;
		}
	}
`
