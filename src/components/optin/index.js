import React from 'react'
import { Container, Input, Button, Text } from './styles'

const Optin = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
export default Optin

Optin.Input = ({ ...props }) => {
  return <Input {...props} />
}

Optin.Button = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </Button>
  )
}

Optin.Text = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}
