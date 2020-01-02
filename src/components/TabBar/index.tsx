import React from 'react'
import { TabBar } from 'antd-mobile'
import todoIcon from 'icons/todo.png'
import todoIconSelected from 'icons/todo_s.png'
import userIcon from 'icons/user.png'
import userIconSelected from 'icons/user_s.png'
import { TabBarTypes } from '@/types'

class AppTabBar extends React.Component<TabBarTypes.TabBarProps, TabBarTypes.TabBarState> {
  state = {
    selectedTab: 'todos' as TabBarTypes.TabKeys
  }

  private setSelectedTab = (key: TabBarTypes.TabKeys): void => {
    this.setState({
      selectedTab: key
    })
    this.props.onTabBarChange?.(key)
  }

  render() {
    const iconSize: React.CSSProperties = {
      width: '22px',
      height: '22px'
    }

    return (
      <TabBar
        unselectedTintColor="#333"
        tintColor="#33A3F4"
      >
        <TabBar.Item
          title="待办"
          key="todos"
          icon={<img src={todoIcon} style={iconSize} alt="" />}
          selectedIcon={<img src={todoIconSelected} style={iconSize} alt="" />}
          selected={this.state.selectedTab === 'todos'}
          onPress={() => {
            this.setSelectedTab('todos')
          }}
        >
          {this.props.tabBarContent.todos}
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          key="user"
          icon={<img src={userIcon} style={iconSize} alt="" />}
          selectedIcon={<img src={userIconSelected} style={iconSize} alt="" />}
          selected={this.state.selectedTab === 'user'}
          onPress={() => {
            this.setSelectedTab('user')
          }}
        >
          {this.props.tabBarContent.user}
        </TabBar.Item>
      </TabBar>
    )
  }
}

export default AppTabBar
