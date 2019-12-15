import React, { ReactText } from "react"
import { ListView, Icon, PullToRefresh, List, SwipeAction } from "antd-mobile"
import { TodosTypes } from '@/types'

const data = require("./data.json")

const ListItem = List.Item
const Brief = ListItem.Brief

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1: ReactText, r2: ReactText) => r1 !== r2
})

class TodoList extends React.Component<{}, TodosTypes.TodoListState> {
  state = {
    dataSource,
    list: data,
    currentPage: 1,
    pageSize: 20,
    totalSize: 2,
    loadingMore: false,
    refreshing: false,
    listHeight: document.documentElement.clientHeight - 90 - 50
  }

  onEndReached = () => {
    this.setState({
      list: this.state.list.concat([
        {
          title: 'haha1'
        },
        {
          title: 'haha2'
        }
      ])
    })
  }

  renderRow = (rowData: any, sectionID: ReactText, rowID: ReactText) => {
    return (
      <SwipeAction
        key={rowData.id || rowID}
        autoClose
        right={[
          {
            text: '删除',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' },
          },
          {
            text: '完成',
            onPress: () => console.log('done'),
            style: { backgroundColor: '#33a3f4', color: 'white' },
          },
        ]}
      >
        <ListItem
          extra="10:30"
          align="top"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={e => console.log(e)}>
          {rowData.title} <Brief>subtitle</Brief>
        </ListItem>
      </SwipeAction>
    )
  }

  renderFooter = () => {
    return (
      <div style={{ textAlign: "center", padding: '10px 0' }}>
        <Icon type="loading" />
      </div>
    )
  }

  onRefresh = () => {

  }

  render() {
    const { list, dataSource, pageSize, listHeight } = this.state

    return (
      <div className="todos-list">
        {list.length ? (
          <ListView
            dataSource={dataSource.cloneWithRows(list)}
            renderRow={this.renderRow}
            renderFooter={this.renderFooter}
            initialListSize={pageSize}
            pageSize={pageSize}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
            style={{
              height: listHeight,
              overflow: "auto"
            }}
            pullToRefresh={
              <PullToRefresh
                getScrollContainer={() => ''}
                indicator={{}}
                direction="down"
                damping={100}
                distanceToRefresh={25}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
          />
        ) : (
          <div style={{ textAlign: "center" }}>暂无数据</div>
        )}
      </div>
    )
  }
}

export default TodoList
