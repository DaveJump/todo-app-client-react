import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@/utils/loadable'

const Home = loadable(() => import('@/pages/Home'))
const Login = loadable(() => import('@/pages/Login'))
const Settings = loadable(() => import('@/pages/Settings'))
const ChangePwd = loadable(() => import('@/pages/Settings/ChangePwd'))
const ModifyTodo = loadable(() => import('@/pages/Todos/Modify'))

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
        <Route path="/settings">
          <Settings />
          <Route path="/settings/changePwd">
            <ChangePwd />
          </Route>
        </Route>
        <Route path="/todo/:id">
          <ModifyTodo />
        </Route>
      </Route>
    </Switch>
  )
}

export default Routes
