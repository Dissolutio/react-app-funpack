import React from 'react'
import styled from 'styled-components'
import { useAuthUserContext, useFirebaseContext } from '../../firebase'

const CurrentUserReadout = () => {
	const firebaseApp = useFirebaseContext()
	const { user } = useAuthUserContext()
	return (
		<div>
			{user ? (
				<>
					<small>You are signed in as {user.email}</small>
					<button onClick={firebaseApp.doSignOut}>Sign Out</button>
				</>
			) : (
				<small>You are not signed in.</small>
			)}
		</div>
	)
}

export default CurrentUserReadout
