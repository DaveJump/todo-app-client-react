import React from 'react'
import { WingBlank, List, InputItem, Toast, Button, WhiteSpace } from 'antd-mobile'
import LoginStyle from './style.module.scss'
import { LoginTypes } from '@/types'

export default class Login extends React.Component<{}, LoginTypes.LoginState> {
  state: LoginTypes.LoginState = {
    usernameError: false,
    passwordError: false,
    username: '',
    password: ''
  }

  onErrorClick = (type: keyof LoginTypes.LoginValueState): void => {
    if (this.state[`${type}Error`]) {
      Toast.info(`${type === 'username' ? '用户名' : '密码'}不能为空`, 1)
    }
  }

  onChange = (value: string, type: keyof LoginTypes.LoginValueState): void => {
    this.setState({
      [type]: value,
      [`${type}Error`]: !value.trim().length
    })
  }

  render() {
    return (
      <div className={`todo-app-wrap ${LoginStyle['todo-app-login']}`}>
        <h2>Todo App</h2>
        <List>
          <InputItem
            type="text"
            placeholder="输入用户名"
            value={this.state.username}
            error={this.state.usernameError}
            onChange={value => { this.onChange(value, 'username') }}
            onErrorClick={this.onErrorClick.bind(this, 'username')}
          >用户名</InputItem>
          <InputItem
            type="password"
            placeholder="输入密码"
            value={this.state.password}
            error={this.state.passwordError}
            onChange={value => { this.onChange(value, 'password') }}
            onErrorClick={this.onErrorClick.bind(this, 'password')}
          >密码</InputItem>
        </List>
        <WhiteSpace />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" size="large">登录</Button>
        </WingBlank>
      </div>
    )
  }
}
