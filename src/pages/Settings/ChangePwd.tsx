import React from 'react'
import CreateNavigator from '@/components/Navigator'
import { List, InputItem, WhiteSpace, WingBlank, Button, Toast } from 'antd-mobile'
import { SettingTypes } from '@/types'

const Navigator = CreateNavigator(() => <span>修改密码</span>)

export default class ChangePwd extends React.Component {
  state: SettingTypes.ChangePwdState = {
    currentPasswordError: false,
    newPasswordError: false,
    confirmNewPasswordError: false,
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  }

  onErrorClick = (type: keyof SettingTypes.ChangePwdValueState): void => {
    if (this.state[`${type}Error`]) {
      let info = ''

      if (type === 'currentPassword' && !this.state.currentPassword) {
        info = '当前密码不能为空'
      }
      if (type === 'newPassword' && !this.state.newPassword) {
        info = '新密码不能为空'
      }
      if (type === 'confirmNewPassword') {
        const { newPassword, confirmNewPassword } = this.state
        if (!confirmNewPassword) {
          info = '请再次输入新密码'
        } else if (newPassword !== confirmNewPassword) {
          info = '两次新密码不匹配'
        }
      }

      Toast.info(info, 1)
    }
  }

  onChange = (value: string, type: keyof SettingTypes.ChangePwdValueState): void => {
    this.setState({
      [type]: value,
      [`${type}Error`]: !value.trim().length
    }, () => {
      const { newPassword, confirmNewPassword } = this.state
      this.setState({
        confirmNewPasswordError: newPassword !== confirmNewPassword
      })
    })
  }

  render() {
    return (
      <div className="stretch-page">
        <Navigator />
        <WhiteSpace />
        <WhiteSpace />
        <List>
          <InputItem
            type="password"
            placeholder="输入当前密码"
            value={this.state.currentPassword}
            error={this.state.currentPasswordError}
            onChange={value => { this.onChange(value, 'currentPassword') }}
            onErrorClick={this.onErrorClick.bind(this, 'currentPassword')}
          >当前密码</InputItem>
          <InputItem
            type="password"
            placeholder="输入新密码"
            value={this.state.newPassword}
            error={this.state.newPasswordError}
            onChange={value => { this.onChange(value, 'newPassword') }}
            onErrorClick={this.onErrorClick.bind(this, 'newPassword')}
          >新密码</InputItem>
          <InputItem
            type="password"
            placeholder="再次输入新密码"
            value={this.state.confirmNewPassword}
            error={this.state.confirmNewPasswordError}
            onChange={value => { this.onChange(value, 'confirmNewPassword') }}
            onErrorClick={this.onErrorClick.bind(this, 'confirmNewPassword')}
          >确认新密码</InputItem>
        </List>
        <WhiteSpace />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" size="large">确认</Button>
        </WingBlank>
      </div>
    )
  }
}
