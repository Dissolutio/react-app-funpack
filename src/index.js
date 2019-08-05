import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Firebase, FirebaseContext, useFirebaseContext, AuthUserContext, useAuthListener } from './firebase'
import { UIContextProvider } from './hooks/useUIContext'
import App from './App'
import 'normalize.css'
import * as serviceWorker from './serviceWorker'

const firebaseApp = new Firebase()

ReactDOM.render(
    <FirebaseContext.Provider value={firebaseApp}>
        <AppWrapper />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
)

function AppWrapper() {
    const firebaseApp = useFirebaseContext()
    const authState = useAuthListener(firebaseApp)
    return (
        <AuthUserContext.Provider value={authState}>
            <UIContextProvider>
                <Router>
                    <App />
                </Router>
            </UIContextProvider>
        </AuthUserContext.Provider>
    )
}

serviceWorker.unregister()
