import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthUserContext, useFirebaseContext } from '../firebase'
import * as ROUTES from '../routes'

const CurrentUserHUD = () => {
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

export default function Header() {
	return (
		<header>
			<CurrentUserHUD />
			<Navigation />
		</header>
	)
}

const Navigation = () => {
	const { user } = useAuthUserContext()
	const notSignedInCondition = !user
	const signedInCondition = !!user
	const adminCondition = user && user.userRole === `admin`

	return (
		<nav>
			<ul>
				{notSignedInCondition ? <NonAuthLinks /> : null}
				{signedInCondition ? <AuthLinks /> : null}
				{adminCondition ? <AdminLinks /> : null}
			</ul>
		</nav>
	)
}
const NonAuthLinks = () => (
	<>
		<li>
			<Link to={ROUTES.LANDING}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.SIGNUP}>Sign Up</Link>
		</li>
		<li>
			<Link to={ROUTES.SIGNIN}>Sign In</Link>
		</li>
	</>
)
const AuthLinks = () => (
	<>
		<li>
			<Link to={ROUTES.USER_HOME}>User Home</Link>
		</li>
		<li>
			<Link to={ROUTES.USER_ACCOUNT}>Account</Link>
		</li>
	</>
)
const AdminLinks = () => (
	<>
		<li>
			<Link to={ROUTES.ADMIN}>Admin</Link>
		</li>
		<li>
			<Link to={ROUTES.ADMIN_USER_LIST}>Admin</Link>
		</li>
	</>
)
