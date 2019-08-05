import styled from 'styled-components'

export const PageStyleContainer = styled.div`
    --bg-light: var(--gray1, lightyellow);
    --bg-dark: var(--gray5, lightyellow);
    --fg-light: var(--gray2, darkgray);
    --fg-dark: var(--gray4, darkgray);
    --text-dark: var(--font-dark, black);
    --text-size: var(--text5, 18px);

    background-color: var(--bg-light);
    border: 3px solid var(--fg-color);
    color: var(--text-color);
    font-size: var(--text-size);

    padding: 20px 30px;
`
