import React from 'react'
import CreateNavigator from '@/components/Navigator'
import EditIcon from '@/assets/icons/edit.png'
import Add from '@/assets/icons/add.png'
import style from './style.module.scss'
import { SearchBar } from 'antd-mobile'
import { TodosTypes } from '@/types'

class TodosSearchBar extends React.Component<
  TodosTypes.TodosSearchBarProps,
  TodosTypes.TodosSearchBarState
> {
  state = {
    searchValue: ''
  }

  onSearchValueChange = (value: string) => {
    this.setState({
      searchValue: value
    })
    const { onSearchTextChange } = this.props
    onSearchTextChange && onSearchTextChange(value)
  }

  render() {
    return (
      <SearchBar
        placeholder="搜索待办"
        value={this.state.searchValue}
        onChange={this.onSearchValueChange}
      />
    )
  }
}

const TodosNav = CreateNavigator(() => <span>待办</span>)

class TodosHeader extends React.Component<
  TodosTypes.TodosHeaderProps,
  TodosTypes.TodosHeaderState
> {
  static SearchBar: typeof TodosSearchBar

  onEditClick = () => {
    const { onEditClick } = this.props
    onEditClick && onEditClick()
  }

  onAddTodoClick = () => {
    const { onAddTodoClick } = this.props
    onAddTodoClick && onAddTodoClick()
  }

  render() {
    return (
      <div className={style['todos-header']}>
        <TodosNav
          navigable={false}
          icon={<img src={EditIcon} alt="" onClick={this.onEditClick} />}
          rightContent={[
            <img src={Add} alt="" onClick={this.onAddTodoClick} key="0" />
          ]}
        />
      </div>
    )
  }
}

TodosHeader.SearchBar = TodosSearchBar

export default TodosHeader
