import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Background,
  Container,
  Logo,
  Link,
  ButtonLink,
  Group,
  Feature,
  FeatureCallOut,
  Text,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './styles'

const Header = ({ bg = true, children, ...props }) => {
  return bg ? <Background {...props}>{children} </Background> : children
}
export default Header

Header.Feature = ({ children, ...props }) => {
  return <Feature {...props}>{children}</Feature>
}

Header.FeatureCallOut = ({ children, ...props }) => {
  return <FeatureCallOut {...props}>{children}</FeatureCallOut>
}

Header.Text = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}

Header.TextLink = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>
}

Header.Frame = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Header.Group = ({ children, ...props }) => {
  return <Group {...props}>{children}</Group>
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

Header.Picture = ({ src, ...props }) => {
  return <Picture src={`/images/users/${src}.png`} {...props} />
}

Header.Profile = ({ children, ...props }) => {
  return <Profile {...props}>{children}</Profile>
}

Header.Dropdown = ({ children, ...props }) => {
  return <Dropdown {...props}>{children}</Dropdown>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...props }) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...props}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src='/images/icons/search.png' alt='Search' />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder='Search'
        active={searchActive}
      />
    </Search>
  )
}

Header.PlayButton = ({ children, ...props }) => {
  return <PlayButton {...props}>{children}</PlayButton>
}
