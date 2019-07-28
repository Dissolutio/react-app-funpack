import React from 'react'
import ReactDOM from 'react-dom'
import { Firebase, useFirebaseContext, FirebaseContext, AuthUserContext, useAuth } from './firebase'
import App from './App'
import * as serviceWorker from './serviceWorker'

const firebaseApp = new Firebase()

ReactDOM.render(
	<FirebaseContext.Provider value={firebaseApp}>
		<AppAuthWrapper />
	</FirebaseContext.Provider>,
	document.getElementById('root'),
)
function AppAuthWrapper() {
	const firebaseApp = useFirebaseContext()
	const authState = useAuth(firebaseApp)
	return (
		<AuthUserContext.Provider value={authState}>
			<App />
		</AuthUserContext.Provider>
	)
}

serviceWorker.unregister()
