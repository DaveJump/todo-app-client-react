import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default function CreateNavigator(NavTitle: React.FC<{}> | any) {
  return class EnhancedNav extends React.Component<any> {
    static defaultProps = {
      navigable: true
    }

    onLeftClick = () => {
      window.history.back()
    }

    render() {
      const LeftSlot = this.props.navigable ? {
        icon: <Icon type="left" />,
        onLeftClick: this.onLeftClick
      } : {}

      const NavProps = {...this.props}
      delete NavProps.navigable

      return (
        <div>
          <NavBar mode="light" {...LeftSlot} {...NavProps}>
            { typeof NavTitle === 'string' ? NavTitle : <NavTitle /> }
          </NavBar>
        </div>
      )
    }
  }
}
