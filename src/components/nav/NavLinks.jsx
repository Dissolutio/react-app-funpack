import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthUserContext } from '../../firebase'
import * as ROUTES from '../../routes'

const NavLinks = () => {
	const { user } = useAuthUserContext()
	const notSignedInCondition = !user
	const signedInCondition = !!user
	const adminCondition = user && user.userRole === `admin`

	return (
		<nav>
			{notSignedInCondition ? <NonAuthLinks /> : null}
			{signedInCondition ? <AuthLinks /> : null}
			{adminCondition ? <AdminLinks /> : null}
		</nav>
	)
}
const NonAuthLinks = () => (
	<>
		<Link to={ROUTES.LANDING}>Home</Link>
		<Link to={ROUTES.SIGNUP}>Sign Up</Link>
		<Link to={ROUTES.SIGNIN}>Sign In</Link>
	</>
)
const AuthLinks = () => (
	<>
		<Link to={ROUTES.USER_HOME}>User Home</Link>
		<Link to={ROUTES.USER_ACCOUNT}>Account</Link>
	</>
)
const AdminLinks = () => (
	<>
		<Link to={ROUTES.ADMIN}>Admin</Link>
		<Link to={ROUTES.ADMIN_USER_LIST}>Admin</Link>
	</>
)
export default NavLinks
