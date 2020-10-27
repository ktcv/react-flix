import React from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'normalize.css'
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'
import { firebase } from './lib/firebase.prod'

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
