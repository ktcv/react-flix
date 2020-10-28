import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import HeaderContainer from '../containers/header'
import JumbotronContainer from '../containers/jumbotron'
import FaqsContainer from '../containers/faqs'
import FooterContainer from '../containers/footer'
import { Feature, Optin } from '../components'
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

const Home = () => {
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
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>

          <Optin>
            <Optin.Input placeholder='Email address' />
            <Optin.Button onClick={(event) => mockSignin(event)}>
              Try it now
            </Optin.Button>
          </Optin>
          <Optin.Text>
            Ready to watch? Enter your email to start your free trial.
          </Optin.Text>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

export default Home
