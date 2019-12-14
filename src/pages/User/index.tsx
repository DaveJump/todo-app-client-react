import React from 'react'
import UserInfo from './Info'
import UserList from './List'
import avatar from 'icons/avatar_boy.png'
import settings from 'icons/settings.png'
import { UserTypes } from '@/types'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const UserListOptions: UserTypes.UserListProps['options'] = {
  settings: {
    title: '设置',
    arrowDirection: 'horizontal',
    thumb: settings
  }
}

interface UserProps extends RouteComponentProps {}

class User extends React.Component<UserProps, UserTypes.UserState> {
  state = {
    userInfo: {
      avatarSrc: avatar,
      nickName: '未登录'
    }
  }

  onListItemClick = (option: UserTypes.UserListKeys): void => {
    this.props.history.push({
      pathname: `/${option}`
    })
  }

  render() {
    const { avatarSrc, nickName } = this.state.userInfo

    return (
      <>
        <UserInfo avatarSrc={avatarSrc} nickName={nickName} />
        <UserList
          options={UserListOptions}
          onClick={this.onListItemClick}
        />
      </>
    )
  }
}

export default withRouter(User)
