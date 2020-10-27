import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

const Signup = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid =
    firstName === '' ||
    password === '' ||
    confirmPassword === '' ||
    emailAddress === ''

  const handleSignup = (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            display: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE)
          })
      )
      .catch((error) => {
        setPassword('')
        setConfirmPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>

          <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder='Email address'
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
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={({ target }) => setConfirmPassword(target.value)}
            />

            {error && <Form.Error>{error}</Form.Error>}

            <Form.Submit disabled={isInvalid} type='submit'>
              Sign up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to='/signin'>Sign in now.</Form.Link>
            </Form.Text>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default Signup
