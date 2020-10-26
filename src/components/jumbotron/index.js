import React from 'react'
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles'

const Jumbotron = ({ children, direction = 'row', ...props }) => {
  return (
    <Item {...props}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}
export default Jumbotron

Jumbotron.Container = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Jumbotron.Pane = ({ children, ...props }) => {
  return <Pane {...props}>{children}</Pane>
}

Jumbotron.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Jumbotron.SubTitle = ({ children, ...props }) => {
  return <SubTitle {...props}>{children}</SubTitle>
}

Jumbotron.Image = ({ ...props }) => {
  return <Image {...props} />
}
