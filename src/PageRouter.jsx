import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import UserHomePage from './components/pages/UserHomePage'
import AccountPage from './components/pages/AccountPage'
import AdminPage from './components/pages/AdminPage'
import AdminUserListPage from './components/pages/AdminUserListPage'
import Page404NotFound from './components/pages/Page404NotFound'
import VerifyEmail from './components/authentication/VerifyEmail'
import SignUpForm from './components/authentication/SignUpForm'
import SignInForm from './components/authentication/SignInForm'
import { useAuthUserContext, withAuthorization } from './firebase'

import * as ROUTES from './routes'

export default function PageRouter() {
    const { user } = useAuthUserContext()
    const notSignedInCondition = () => !user
    const signedInCondition = () => !!user
    const emailNotVerifiedCondition = () => !!user && user.emailVerified === false
    const emailVerifiedCondition = () => !!user && user.emailVerified === true
    const adminCondition = () => !!user && user.userRole === `admin`

    return (
        <Switch>
            <Route
                exact
                path={ROUTES.LANDING}
                component={withAuthorization(notSignedInCondition, ROUTES.USER_HOME)(LandingPage)}
            />
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
    )
}
