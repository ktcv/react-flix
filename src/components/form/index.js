import React from 'react'
import {
  Container,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
  Base,
} from './styles'

const Form = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
export default Form

Form.Error = ({ children, ...props }) => {
  return <Error {...props}>{children}</Error>
}

Form.Base = ({ children, ...props }) => {
  return <Base {...props}>{children}</Base>
}

Form.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Form.Text = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}

Form.TextSmall = ({ children, ...props }) => {
  return <TextSmall {...props}>{children}</TextSmall>
}

Form.Link = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>
}

Form.Input = ({ children, ...props }) => {
  return <Input {...props}>{children}</Input>
}

Form.Submit = ({ children, ...props }) => {
  return <Submit {...props}>{children}</Submit>
}
