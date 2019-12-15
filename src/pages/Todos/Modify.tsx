import React from 'react'
import CreateNavigator from '@/components/Navigator'
import EditIcon from '@/assets/icons/edit.png'
import style from './style.module.scss'
import { List, InputItem, Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import { TodosTypes } from '@/types'

const ModifyNav = CreateNavigator(() => <span>待办详情</span>)
class ModifyTodo extends React.Component<{}, TodosTypes.TodoModifyState> {
  state: TodosTypes.TodoModifyState = {
    todoTitle: '',
    todoDesc: '',
    todoTitleError: false,
    todoDescError: false
  }

  onErrorClick = (type: keyof TodosTypes.TodoModifyValueState): void => {
    if (this.state[`${type}Error`]) {
      Toast.info(`${type === 'todoTitle' ? '标题' : '描述'}不能为空`, 1)
    }
  }

  onChange = (value: string, type: keyof TodosTypes.TodoModifyValueState): void => {
    this.setState({
      [type]: value,
      [`${type}Error`]: !value.trim().length
    })
  }

  render() {
    return (
      <div className={style['modify-todo']}>
        <ModifyNav
          rightContent={[
            <img key="0" src={EditIcon} alt="" />
          ]}
        />
        <WhiteSpace />
        <List>
          <InputItem
            type="text"
            placeholder="输入标题"
            value={this.state.todoTitle}
            error={this.state.todoTitleError}
            onChange={value => { this.onChange(value, 'todoTitle') }}
            onErrorClick={this.onErrorClick.bind(this, 'todoTitle')}
          >标题</InputItem>
          <InputItem
            type="text"
            placeholder="输入描述"
            value={this.state.todoDesc}
            error={this.state.todoDescError}
            onChange={value => { this.onChange(value, 'todoDesc') }}
            onErrorClick={this.onErrorClick.bind(this, 'todoDesc')}
          >描述</InputItem>
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

export default ModifyTodo
