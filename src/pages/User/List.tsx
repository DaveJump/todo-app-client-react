import React from 'react'
import { WhiteSpace, List } from 'antd-mobile'
import { UserTypes } from '@/types'

const UserList: React.FC<UserTypes.UserListProps> = props => {
  const options = props.options
  return (
    <>
      <WhiteSpace size="lg" />
      <List>
        {
          Object.keys(options).map(opt => (
            <List.Item
              arrow={options[opt].arrowDirection}
              onClick={() => { props.onClick?.(opt as UserTypes.UserListKeys) }}
              thumb={options[opt].thumb}
              key={opt}
            >
              {options[opt].title}
            </List.Item>
          ))
        }

      </List>
    </>
  )
}

export default UserList
