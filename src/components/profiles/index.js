import React from 'react'
import { Container, Title, List, Item, Picture, Name } from './styles'

const Profiles = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
export default Profiles

Profiles.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Profiles.List = ({ children, ...props }) => {
  return <List {...props}>{children}</List>
}

Profiles.Item = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>
}

Profiles.Picture = ({ src, ...props }) => {
  return (
    <Picture
      {...props}
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
    />
  )
}

Profiles.Name = ({ children, ...props }) => {
  return <Name {...props}>{children}</Name>
}
