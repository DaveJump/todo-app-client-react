import React from 'react'
import UserStyle from './style.module.scss'
import { UserTypes } from '@/types'

const UserInfo: React.FC<UserTypes.UserInfoProps> = (props: UserTypes.UserInfoProps) => {
  return (
    <div className={UserStyle['user-info']}>
      <div className={UserStyle['user-avatar']}>
        <img src={props.avatarSrc} alt="" />
        <div className={UserStyle['user-nickname']}>{props.nickName}</div>
      </div>
    </div>
  )
}

export default UserInfo
