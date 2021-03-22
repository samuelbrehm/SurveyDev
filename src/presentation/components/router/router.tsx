import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SurveyList } from '@/presentation/pages'

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
        <Route path="/" exact component={SurveyList}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
