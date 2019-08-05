import React from 'react'
import styled from 'styled-components'

import { useAuthUserContext } from './firebase'
import SideNav from './components/navigation/SideNav'
import Header from './components/layout/Header'
import PageRouter from './PageRouter'
import { PageStyleContainer } from './components/shared/StyleContainer'
function App() {
    const { initializing } = useAuthUserContext()
    if (initializing) {
        return <h1>Initializing Authentication</h1>
    }

    return (
        <AppStyleContainer>
            <SideNav />
            <Header />
            <PageStyleContainer>
                <PageRouter />
            </PageStyleContainer>
        </AppStyleContainer>
    )
}
export default App

const AppStyleContainer = styled.div`
    box-sizing: border-box;
    --text1: 16px;
    --text2: 20px;
    --text3: 24px;
    --text4: 30px;
    --text5: 2rem;
    --gray1: #ccdad1; /*light gray */
    --gray2: #9caea9; /* dark medium gray */
    --gray3: #788585; /* old silver */
    --gray4: #7c7a7a; /* trolley gray */
    --gray5: #494949; /* outer space */
    --black: #121111; /* licorice */
    --font-light: #ffffff; /* anti-flash white */
    --font-dark: #1a1818; /* eerie black */
`
