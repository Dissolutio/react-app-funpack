import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
	apiKey: process.env.REACT_APP_FIRE_APIKEY,
	authDomain: process.env.REACT_APP_FIRE_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_FIRE_DB_URL,
	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_APPID,
}
class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.database()
		this.EmailAuthProvider = app.auth.EmailAuthProvider
	}
	doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)
	doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
	doSignOut = () => this.auth.signOut()
	doSendEmailVerification = () =>
		this.auth.currentUser.sendEmailVerification({
			url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
		})
	doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
	doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

	// *** Users API ***
	dbAllUsers = () => this.db.ref(`users`)
	dbUserById = uid => this.db.ref(`users/${uid}`)
	saveNewUser = user => {
		const { uid, username, email, userRole, emailVerified } = user
		this.dbUserById(uid).set({
			username,
			email,
			userRole,
			emailVerified,
		})
	}
}
export { Firebase }
