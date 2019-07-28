import React from 'react'
import ReactDOM from 'react-dom'
import { Firebase, FirebaseContext } from './firebase'
import App from './App'
import * as serviceWorker from './serviceWorker'

const firebaseApp = new Firebase()

ReactDOM.render(
	<FirebaseContext.Provider value={firebaseApp}>
		<App />
	</FirebaseContext.Provider>,
	document.getElementById('root'),
)

serviceWorker.unregister()
