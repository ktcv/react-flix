import React from 'react'
import { LockBody, ReleaseBody, Spinner, Picture } from './styles'

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid='loading-picture' />
    </Spinner>
  )
}
export default Loading

Loading.ReleaseBody = () => {
  return <ReleaseBody />
}
