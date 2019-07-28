import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSessionContext } from './firebase'

import Header from './components/Header'
import LandingPage from './components/pages/LandingPage'
import UserHomePage from './components/pages/UserHomePage'
import AccountPage from './components/pages/AccountPage'
import AdminPage from './components/pages/AdminPage'
import AdminUserListPage from './components/pages/AdminUserListPage'
import SignUpForm from './components/authentication/SignUpForm'
import SignInForm from './components/authentication/SignInForm'
import PasswordForgetPage from './components/pages/PasswordForgetPage'
import Page404NotFound from './components/pages/Page404NotFound'

import * as ROUTES from './routes'

function App() {
	const { initializing, user } = useSessionContext()
	if (initializing) {
		return <h1>Initializing Authentication</h1>
	}
	return (
		<div>
			<Router>
				<Header />
				<div id="page-wrapper">
					<Switch>
						<Route exact path={ROUTES.LANDING} component={LandingPage} />
						<Route exact path={ROUTES.SIGNUP} component={SignUpForm} />
						<Route exact path={ROUTES.SIGNIN} component={SignInForm} />
						<Route exact path={ROUTES.PW_FORGET} component={PasswordForgetPage} />
						<Route exact path={ROUTES.USER_HOME} component={UserHomePage} />
						<Route exact path={ROUTES.USER_ACCOUNT} component={AccountPage} />
						<Route exact path={ROUTES.ADMIN} component={AdminPage} />
						<Route exact path={ROUTES.ADMIN_USER_LIST} component={AdminUserListPage} />
						<Route component={Page404NotFound} />
					</Switch>
				</div>
			</Router>
		</div>
	)
}
export default App
