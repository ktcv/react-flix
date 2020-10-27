import React from 'react'
import HeaderContainer from '../containers/header'
import JumbotronContainer from '../containers/jumbotron'
import FaqsContainer from '../containers/faqs'
import FooterContainer from '../containers/footer'
import { Feature, Optin } from '../components'

const Home = () => {
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
            <Optin.Button>Try it now</Optin.Button>
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
