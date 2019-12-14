import React from 'react'
import CreateNavigator from '@/components/Navigator'
import SettingList from './List'
import { SettingTypes } from '@/types'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const SettingGroups: SettingTypes.SettingProps['groups'] = [
  {
    title: '账户',
    name: 'account',
    options: {
      changePwd: {
        title: '修改密码',
        arrowDirection: 'horizontal'
      }
    }
  }
]

const Navigator = CreateNavigator(() => <span>设置</span>)

interface SettingsProps extends RouteComponentProps {}

class Settings extends React.Component<SettingsProps> {
  onListItemClick = (group: SettingTypes.AllGroupNames, option: SettingTypes.AllOptionKeys): void => {
    const { history, location } = this.props

    history.push({
      pathname: `${location.pathname}/${option}`
    })
  }

  render() {
    return (
      <div className="stretch-page">
        <Navigator />
        <SettingList groups={SettingGroups} onClick={this.onListItemClick} />
      </div>
    )
  }
}

export default withRouter(Settings)
