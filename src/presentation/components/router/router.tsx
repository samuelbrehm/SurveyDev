import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Factory = {
  makeLogin: React.FC
  makeSignUp: React.FC
}

const Router: React.FC<Factory> = (props: Factory) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={props.makeLogin}/>
        <Route path="/signup" exact component={props.makeSignUp}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
