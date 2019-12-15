import React from 'react'
import TodosHeader from './Header'
import List from './List'
import { withRouter, RouteComponentProps } from 'react-router-dom'

class Todos extends React.Component<RouteComponentProps> {
  onSearchTextChange = (value: string) => {
    console.log(value)
  }

  onEditClick = () => {
    console.log('edit')
  }

  onAddTodoClick = () => {
    this.props.history.push({
      pathname: `/todo/${'0'}`
    })
  }

  render() {
    return (
      <div className="todos-content">
        <TodosHeader onEditClick={this.onEditClick} onAddTodoClick={this.onAddTodoClick} />
        <TodosHeader.SearchBar onSearchTextChange={this.onSearchTextChange} />
        <List />
      </div>
    )
  }
}

export default withRouter(Todos)
