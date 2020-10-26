import React, { useState, createContext, useContext } from 'react'
import { Container, Inner, Item, Title, Header, Body } from './styles'

const ToggleContext = createContext()

const Accordion = ({ children, ...props }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}
export default Accordion

Accordion.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Accordion.Item = function AccordionItem({ children, ...props }) {
  const [toggleShow, setToggleShow] = useState(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...props }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...props}>
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='close' />
      ) : (
        <img src='/images/icons/add.png' alt='open' />
      )}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...props }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return toggleShow ? <Body {...props}>{children}</Body> : null
}
