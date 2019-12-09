import React from 'react'
import UserInfo from './Info'
import UserList from './List'
import avatar from 'icons/avatar_boy.png'
import settings from 'icons/settings.png'
import { UserTypes } from '@/types'

const UserListOptions: UserTypes.UserListProps['options'] = {
  settings: {
    title: '设置',
    arrowDirection: 'horizontal',
    thumb: settings
  }
}

class User extends React.Component<{}, UserTypes.UserState> {
  state = {
    userInfo: {
      avatarSrc: avatar,
      nickName: '未登录'
    }
  }

  render() {
    const { avatarSrc, nickName } = this.state.userInfo

    return (
      <>
        <UserInfo avatarSrc={avatarSrc} nickName={nickName} />
        <UserList options={UserListOptions} />
      </>
    )
  }
}

export default User
