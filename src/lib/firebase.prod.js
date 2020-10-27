import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyDNjXSsW0TZ76ag247zOK0m20asq3mDChI',
  authDomain: 'react-flix-d9752.firebaseapp.com',
  databaseURL: 'https://react-flix-d9752.firebaseio.com',
  projectId: 'react-flix-d9752',
  storageBucket: 'react-flix-d9752.appspot.com',
  messagingSenderId: '538069506392',
  appId: '1:538069506392:web:ed2c72338045eb79b96d2d',
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }
