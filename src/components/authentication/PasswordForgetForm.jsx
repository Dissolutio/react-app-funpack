import React, { useState } from 'react'
import { useFirebaseContext } from '../../firebase'

const PasswordForgetForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		error: null,
		isSent: false,
	})
	const { email, error, isSent } = formData
	const firebaseApp = useFirebaseContext()

	const onSubmit = event => {
		event.preventDefault()
		firebaseApp
			.doPasswordReset(email)
			.then(() => {
				setFormData({ ...formData, isSent: true })
			})
			.catch(error => {
				setFormData({ ...formData, error })
			})
	}
	const onChange = event => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}
	const isInvalid = email === ''
	return isSent ? (
		<div>Password Reset Email Sent!</div>
	) : (
		<form onSubmit={onSubmit}>
			<fieldset>
				<legend>Password Reset</legend>
				<div>
					<label htmlFor="email">
						Email address:
						<input name="email" value={email} onChange={onChange} type="text" placeholder="Email Address" />
					</label>
				</div>
				<button disabled={isInvalid} type="submit">
					Send Password Reset Email
				</button>
			</fieldset>
			{error && <p>{error.message}</p>}
		</form>
	)
}
export default PasswordForgetForm
