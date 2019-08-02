import React, { useState } from 'react'
import styled from 'styled-components'
import SideNav from './nav/SideNav'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const toggleMenuOpen = () => setMenuOpen(!menuOpen)
	return (
		<>
			<SideNav menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
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
