import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute ({ component: Component, AuthCondition, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        AuthCondition ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  )
}

export default PrivateRoute