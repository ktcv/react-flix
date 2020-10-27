import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Background, Container, Logo, ButtonLink } from './styles'

const Header = ({ bg = true, children, ...props }) => {
  return bg ? <Background {...props}>{children} </Background> : children
}
export default Header

Header.Frame = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Header.Logo = ({ to, ...props }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...props} />
    </ReactRouterLink>
  )
}

Header.ButtonLink = ({ children, ...props }) => {
  return <ButtonLink {...props}>{children}</ButtonLink>
}
