import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirebaseContext } from '../../firebase'
import PasswordForgetForm from './PasswordForgetForm'
import * as ROUTES from '../../routes'

const SignInForm = props => {
	const firebaseApp = useFirebaseContext()
	const [formData, setFormData] = useState({ email: '', password: '', error: null })
	const { email, password, error } = formData

	const onFormSubmit = async event => {
		event.preventDefault()
		firebaseApp
			.doSignInWithEmailAndPassword(email, password)
			.then(result => {
				console.log('User Signed In', result)
			})
			.catch(error => {
				console.log('Error signing in', error)
				setFormData({
					...formData,
					error,
				})
			})
	}
	const onTextInputChange = event => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
	}
	const isInvalid = password === '' || email === ''
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
							<input
								name="email"
								value={email}
								onChange={onTextInputChange}
								type="email"
								placeholder="Email Address"
							/>
						</label>
					</div>
					<div>
						<label htmlFor="password">
							Password:
							<input
								name="password"
								value={password}
								onChange={onTextInputChange}
								type="password"
								placeholder="Password"
							/>
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
