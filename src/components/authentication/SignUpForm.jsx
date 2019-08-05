import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useFirebaseContext } from '../../firebase'
import { useInputValue } from '../../hooks/useInputValue'

const SignUpForm = props => {
	const firebaseApp = useFirebaseContext()
	const username = useInputValue('dissolutio')
	const email = useInputValue('entity.john@gmail.com')
	const password = useInputValue('password')
	const passwordVerify = useInputValue('password')
	const [error, setError] = useState({ code: 'fake code', message: 'nothing to say' })

	const onFormSubmit = event => {
		event.preventDefault()
		firebaseApp
			.doCreateUserWithEmailAndPassword(email.value, password.value)
			.then(result => {
				console.log('Created User', result)
				firebaseApp.saveNewUser({
					email: email.value,
					username: username.value,
					userRole: 'default',
					uid: result.user.uid,
					emailVerified: result.user.emailVerified,
				})
			})
			.catch(error => {
				console.log('Error creating user', error)
				setError({
					...error,
				})
			})
	}
	const isInvalid =
		password.value !== passwordVerify.value || password.value === '' || email.value === '' || username.value === ''
	return (
		<div>
			<form onSubmit={onFormSubmit}>
				<fieldset>
					<legend>Register</legend>
					<div>
						<label htmlFor="username">
							Username:
							<input type="text" placeholder="Username" {...username} />
						</label>
					</div>
					<div>
						<label htmlFor="email">
							Email address:
							<input type="text" placeholder="Email" {...email} />
						</label>
					</div>

					<div>
						<label htmlFor="password">
							Password:
							<input type="password" placeholder="Password" {...password} />
						</label>
					</div>
					<div>
						<label htmlFor="passwordVerify">
							Confirm password:
							<input type="password" placeholder="Verify Password" {...passwordVerify} />
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
