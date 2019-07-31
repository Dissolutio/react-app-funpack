import React from 'react'
import styled from 'styled-components'
export default function Header() {
	return (
		<StyledHeader>
			<MenuButton onClick={() => console.log('Open nav')}>&#9776; open</MenuButton>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	min-height: 100px;
	background-color: #888888;
`
const MenuButton = styled.span`
	font-size: 30px;
	cursor: pointer;
`
