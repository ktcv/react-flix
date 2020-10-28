import React, { useState, createContext, useContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './styles'

export const PlayerContext = createContext()

const Player = ({ children, ...props }) => {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...props}>{children}</Container>
    </PlayerContext.Provider>
  )
}
export default Player

Player.Video = function PlayerVideo({ src, ...props }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...props}>
          <Inner>
            <video id='flix-player' controls autoPlay full>
              <source src={src} type='video/mp4' />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null
}

Player.Button = function PlayerButton({ ...props }) {
  const { setShowPlayer } = useContext(PlayerContext)

  return (
    <Button
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
      {...props}
    >
      Play
    </Button>
  )
}
