import React from 'react'
import ReactDOM from 'react-dom'
import { Firebase, useFirebaseContext, FirebaseContext, AuthUserContext, useAuthListener } from './firebase'
import App from './App'
import 'normalize.css'
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
	const authState = useAuthListener(firebaseApp)
	return (
		<AuthUserContext.Provider value={authState}>
			<App />
		</AuthUserContext.Provider>
	)
}

serviceWorker.unregister()
