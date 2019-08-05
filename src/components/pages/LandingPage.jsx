import React from 'react'
import styled from 'styled-components'
import { DummyParagraph } from '../shared/DummyParagraph'

export default function LandingPage() {
    return (
        <LandingPageContainer>
            <DummyParagraph />
            <DummyParagraph />
            <DummyParagraph />
            <DummyParagraph />
            <DummyParagraph />
        </LandingPageContainer>
    )
}
const LandingPageContainer = styled.div`
    color: var(--font-dark, #111111);
    p,
    h1 {
        padding: 1rem;
    }
    p:nth-of-type(1),
    h1:nth-of-type(1) {
        background-color: var(--bg-light1);
    }
    p:nth-of-type(2),
    h1:nth-of-type(2) {
        background-color: var(--bg-light2);
        color: var(--font-light, yellow);
    }
    p:nth-of-type(3),
    h1:nth-of-type(3) {
        background-color: var(--bg-dark1);
        color: var(--font-light, yellow);
    }
    p:nth-of-type(4),
    h1:nth-of-type(4) {
        background-color: var(--bg-dark2);
        color: var(--font-light, yellow);
    }
    p:nth-of-type(5),
    h1:nth-of-type(5) {
        background-color: var(--bg-dark3);
        color: var(--font-light, yellow);
    }
`
