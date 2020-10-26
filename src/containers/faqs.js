import React from 'react'
import { Accordion } from '../components'
import Optin from '../components/optin'
import faqsData from '../fixtures/faq.json'

const FaqsContainer = () => {
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
        <Optin.Button>Try it now</Optin.Button>
        <Optin.Text>
          Ready to watch? Enter your email to start your free trial.
        </Optin.Text>
      </Optin>
    </Accordion>
  )
}

export default FaqsContainer
