import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Accordion } from '../components'
import { Optin } from '../components'
import faqsData from '../fixtures/faq.json'
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

const FaqsContainer = () => {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  const mockSignin = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword('guest@flix.com', 'secret')
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
  }

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <Optin>
        <Optin.Input placeholder='Email address' />
        <Optin.Button onClick={(event) => mockSignin(event)}>
          Try it now
        </Optin.Button>
        <Optin.Text>
          Ready to watch? Enter your email to start your free trial.
        </Optin.Text>
      </Optin>
    </Accordion>
  )
}

export default FaqsContainer
