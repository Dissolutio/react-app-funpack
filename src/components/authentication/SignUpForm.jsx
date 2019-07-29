import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useFirebaseContext } from '../../firebase'

const INITIAL_STATE = {
	username: '',
	email: '',
	password: '',
	passwordVerify: '',
	error: null,
}

const SignUpForm = props => {
	const firebaseApp = useFirebaseContext()
	const [formData, setFormData] = useState({ ...INITIAL_STATE })
	const { username, email, password, passwordVerify, error } = formData

	const onFormSubmit = event => {
		event.preventDefault()
		firebaseApp
			.doCreateUserWithEmailAndPassword(email, password)
			.then(result => {
				console.log('Created User', result)
			})
			.catch(error => {
				console.log('Error creating user', error)
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
	const isInvalid = password !== passwordVerify || password === '' || email === '' || username === ''
	return (
		<div>
			<form onSubmit={onFormSubmit}>
				<fieldset>
					<legend>Register</legend>
					<div>
						<label htmlFor="username">
							Username:
							<input
								name="username"
								value={username}
								onChange={onTextInputChange}
								type="text"
								placeholder="Username"
							/>
						</label>
					</div>
					<div>
						<label htmlFor="email">
							Email address:
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
					<div>
						<label htmlFor="passwordVerify">
							Confirm password:
							<input
								name="passwordVerify"
								value={passwordVerify}
								onChange={onTextInputChange}
								type="password"
								placeholder="Confirm Password"
							/>
						</label>
					</div>
					<button type="submit" disabled={isInvalid}>
						Submit
					</button>
				</fieldset>
				{error && (
					<>
						<p>{`Error code: ${error.code}`}</p> <p>{`Error message: ${error.message}`}</p>
					</>
				)}
			</form>
		</div>
	)
}

export default withRouter(SignUpForm)
