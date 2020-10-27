import React from 'react'
import { Container, Title, SubTitle } from './styles'

const Feature = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
export default Feature

Feature.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Feature.SubTitle = ({ children, ...props }) => {
  return <SubTitle {...props}>{children}</SubTitle>
}
