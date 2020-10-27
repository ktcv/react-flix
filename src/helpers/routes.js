import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const IsUserRedirect = ({ user, loggedInPath, children, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        if (!user) {
          return children
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />
        }

        return null
      }}
    />
  )
}

export const ProtectedRoute = ({ user, children, ...props }) => {
  return (
    <Route
      {...props}
      render={({ location }) => {
        if (user) {
          return children
        }

        if (!user) {
          return (
            <Redirect to={{ pathname: 'signin', state: { from: location } }} />
          )
        }

        return null
      }}
    />
  )
}
