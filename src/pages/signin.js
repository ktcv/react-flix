import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

const Signin = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = password === '' || emailAddress === ''

  const handleSignin = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch((error) => {
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>

          <Form.Base onSubmit={handleSignin} method='POST'>
            <Form.Input
              placeholder='Email'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign in
            </Form.Submit>

            <Form.Text>
              New to Flix? <Form.Link to='/signup'>Sign up now.</Form.Link>
            </Form.Text>
            <Form.Text>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </Form.Text>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default Signin
