import React from 'react'
import { Container, Row, Column, Link, Title, Text, Break } from './styles'

const Footer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
export default Footer

Footer.Row = ({ children, ...props }) => {
  return <Row {...props}>{children}</Row>
}

Footer.Column = ({ children, ...props }) => {
  return <Column {...props}>{children}</Column>
}

Footer.Link = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>
}

Footer.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Footer.Text = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}

Footer.Break = ({ children, ...props }) => {
  return <Break {...props}>{children}</Break>
}
