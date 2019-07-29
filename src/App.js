import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useAuthUserContext, withAuthorization } from './firebase'

import Header from './components/Header'
import LandingPage from './components/pages/LandingPage'
import UserHomePage from './components/pages/UserHomePage'
import AccountPage from './components/pages/AccountPage'
import AdminPage from './components/pages/AdminPage'
import AdminUserListPage from './components/pages/AdminUserListPage'
import Page404NotFound from './components/pages/Page404NotFound'
import SignUpForm from './components/authentication/SignUpForm'
import SignInForm from './components/authentication/SignInForm'
import VerifyEmail from './components/authentication/VerifyEmail'

import * as ROUTES from './routes'

function App() {
	const { initializing, user } = useAuthUserContext()
	if (initializing) {
		return <h1>Initializing Authentication</h1>
	}
	const notSignedInCondition = () => !user
	const signedInCondition = () => !!user
	const emailNotVerifiedCondition = () => !!user && user.emailVerified === false
	const emailVerifiedCondition = () => !!user && user.emailVerified === true
	const adminCondition = () => !!user && user.userRole === `admin`
	return (
		<div>
			<Router>
				<Header />
				<div id="page-wrapper">
					<Switch>
						<Route exact path={ROUTES.LANDING} component={LandingPage} />
						<Route
							exact
							path={ROUTES.SIGNUP}
							component={withAuthorization(notSignedInCondition, ROUTES.USER_HOME)(SignUpForm)}
						/>
						<Route
							exact
							path={ROUTES.SIGNIN}
							component={withAuthorization(notSignedInCondition, ROUTES.USER_HOME)(SignInForm)}
						/>
						<Route
							exact
							path={ROUTES.VERIFY_EMAIL}
							component={withAuthorization(emailNotVerifiedCondition, ROUTES.SIGNIN)(VerifyEmail)}
						/>
						<Route
							exact
							path={ROUTES.USER_HOME}
							component={withAuthorization(signedInCondition, ROUTES.SIGNIN)(UserHomePage)}
						/>
						<Route
							exact
							path={ROUTES.USER_ACCOUNT}
							component={withAuthorization(emailVerifiedCondition, ROUTES.VERIFY_EMAIL)(AccountPage)}
						/>
						<Route
							exact
							path={ROUTES.ADMIN}
							component={withAuthorization(adminCondition, ROUTES.USER_HOME)(AdminPage)}
						/>
						<Route
							exact
							path={ROUTES.ADMIN_USER_LIST}
							component={withAuthorization(adminCondition, ROUTES.USER_HOME)(AdminUserListPage)}
						/>
						<Route component={Page404NotFound} />
					</Switch>
				</div>
			</Router>
		</div>
	)
}
export default App
