import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@/utils/loadable'

const Home = loadable(() => import('@/pages/Home'))
const Login = loadable(() => import('@/pages/Login'))
const Settings = loadable(() => import('@/pages/Settings'))
const ChangePwd = loadable(() => import('@/pages/Settings/ChangePwd'))

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/settings/changePwd">
        <ChangePwd />
      </Route>
    </Switch>
  )
}

export default Routes
