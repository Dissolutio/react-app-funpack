import React, { useContext, useState } from 'react'

export const UIContext = React.createContext([{}, () => {}])

const UIContextProvider = props => {
    const [UIState, setUIState] = useState({
        menuOpen: false,
    })
    return <UIContext.Provider value={[UIState, setUIState]}>{props.children}</UIContext.Provider>
}
const useUIContext = () => {
    const [UIState, setUIState] = useContext(UIContext)
    const { menuOpen } = UIState
    function toggleMenuOpen() {
        setUIState(UIState => ({ ...UIState, menuOpen: !menuOpen }))
    }
    return {
        menuOpen,
        toggleMenuOpen,
    }
}

export { UIContextProvider, useUIContext }
