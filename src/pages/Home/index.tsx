import React from 'react'
import AppTabBar from '@/components/TabBar'
import { HomePageTypes } from '@/types'
import Todos from '@/components/Todos'
import User from '@/components/User'

class Home extends React.Component<{}, HomePageTypes.HomePageState> {
  state = {
    tabBarContent: {
      todos: <Todos />,
      user: <User />
    }
  }

  render() {
    return (
      <div className="todo-app-wrap">
        <AppTabBar tabBarContent={this.state.tabBarContent} />
      </div>
    )
  }
}

export default Home
