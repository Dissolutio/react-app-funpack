import React from 'react'
import styled from 'styled-components'

export default function Header(props) {
	const { toggleMenuOpen } = props
	return (
		<>
			<StyledHeader>
				<MenuButton onClick={toggleMenuOpen}>&#9776; Menu</MenuButton>
			</StyledHeader>
		</>
	)
}

const StyledHeader = styled.header`
	min-height: 100px;
	background-color: #888888;
`
const MenuButton = styled.span`
	font-size: 2rem;
	cursor: pointer;
`
