import React, { useState, createContext, useContext } from 'react'
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Entities,
  Meta,
  Item,
  Image,
} from './styles'

export const FeatureContext = createContext()

const Card = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
export default Card

Card.Group = function CardGroup({ children, ...props }) {
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState({})
  const [featureGenre, setFeatureGenre] = useState('')

  return (
    <FeatureContext.Provider
      value={{
        showFeature,
        setShowFeature,
        itemFeature,
        setItemFeature,
        featureGenre,
        setFeatureGenre,
      }}
    >
      <Group {...props}>{children}</Group>
    </FeatureContext.Provider>
  )
}

Card.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Card.SubTitle = ({ children, ...props }) => {
  return <SubTitle {...props}>{children}</SubTitle>
}

Card.Text = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}

Card.Entities = ({ children, ...props }) => {
  return <Entities {...props}>{children}</Entities>
}

Card.Meta = ({ children, ...props }) => {
  return <Meta {...props}>{children}</Meta>
}

Card.Item = function CardItem({ item, children, ...props }) {
  const { setShowFeature, setItemFeature, setFeatureGenre } = useContext(
    FeatureContext
  )

  return (
    <Item
      onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
        setFeatureGenre(item.genre)
      }}
      {...props}
    >
      {children}
    </Item>
  )
}

Card.Image = ({ ...props }) => {
  return <Image {...props} />
}

Card.Feature = function CardFeature({
  children,
  category,
  rowGenre,
  ...props
}) {
  const { showFeature, itemFeature, featureGenre, setShowFeature } = useContext(
    FeatureContext
  )

  return showFeature && featureGenre === rowGenre.toLowerCase() ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...props}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src='/images/icons/close.png' alt='Close' />
        </FeatureClose>

        <Group margin='30px 0' flexDirection='row' alignItems='center'>
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight='bold'>
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null
}
