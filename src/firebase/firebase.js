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
	dbUserById = uid => this.db.ref(`users/${uid}`)
	saveNewUser = ({ uid, username, email, userRole }) => {
		console.log(uid, username, email, userRole)
		this.dbUserById(uid).set({
			username,
			email,
			userRole: 'default',
		})
	}
}
export { Firebase }
