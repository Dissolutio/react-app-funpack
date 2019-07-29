import React, { useContext } from 'react'

const FirebaseContext = React.createContext(null)

const useFirebaseContext = () => {
	const firebaseApp = useContext(FirebaseContext)
	return firebaseApp
}

export { FirebaseContext, useFirebaseContext }
