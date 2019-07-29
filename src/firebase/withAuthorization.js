import React from 'react'
import { withRouter } from 'react-router-dom'
import { useAuthUserContext } from './authentication'
const withAuthorization = (condition, redirectTo) => Component => {
	const AuthorizationHOC = props => {
		const { user } = useAuthUserContext()
		if (!condition(user)) {
			props.history.push(redirectTo)
		}
		return condition(user) ? <Component {...props} /> : null
	}
	return withRouter(AuthorizationHOC)
}

export { withAuthorization }
