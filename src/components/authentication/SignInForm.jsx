import React from 'react'
import { Link } from 'react-router-dom'
import { useFirebaseContext } from '../../firebase'
import PasswordForgetForm from './PasswordForgetForm'
import * as ROUTES from '../../routes'
import { useInputValue } from '../../hooks/useInputValue'

const SignInForm = props => {
    const email = useInputValue('')
    const password = useInputValue('')
    const firebaseApp = useFirebaseContext()
    const [error, setError] = React.useState({ code: '', message: '' })

    const onFormSubmit = async event => {
        event.preventDefault()
        firebaseApp
            .doSignInWithEmailAndPassword(email.value, password.value)
            .then(result => {
                console.log('User Signed In', result)
            })
            .catch(error => {
                console.log('Error signing in', error)
                setError({ ...error })
            })
    }
    const isInvalid = password.value === '' || email.value === ''
    return (
        <>
            <p>
                Don't have an account? <Link to={ROUTES.SIGNUP}>Sign Up!</Link>
            </p>
            <form onSubmit={onFormSubmit}>
                <fieldset>
                    <legend>Sign in with email/password</legend>
                    <div>
                        <label htmlFor="email">
                            Email:
                            <input type="text" placeholder="Email" {...email} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password:
                            <input type="password" placeholder="Password" {...password} />
                        </label>
                    </div>
                    <button type="submit" disabled={isInvalid}>
                        Submit
                    </button>
                </fieldset>
                {error && (
                    <>
                        <p>{`Error code ${error.code}`}</p>
                        <p>{`Error message ${error.message}`}</p>
                    </>
                )}
            </form>
            <PasswordForgetForm />
        </>
    )
}

export default SignInForm
