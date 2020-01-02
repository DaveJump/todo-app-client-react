import React from 'react'
import { WhiteSpace, List } from 'antd-mobile'
import { SettingTypes } from '@/types'

const SettingList: React.FC<SettingTypes.SettingProps> = props => {
  const groups = props.groups || []

  return (
    <>
      <WhiteSpace size="lg" />
      {
        groups.map(g => (
          <List renderHeader={() => g.title} key={g.name}>
            {
              Object.keys(g.options).map(opt => (
                <List.Item
                  arrow={g.options[opt].arrowDirection}
                  onClick={() => { props.onClick?.(g.name, opt as SettingTypes.AllOptionKeys) }}
                  thumb={g.options[opt].thumb}
                  key={opt}
                >
                  {g.options[opt].title}
                </List.Item>
              ))
            }
          </List>
        ))
      }
    </>
  )
}

export default SettingList
