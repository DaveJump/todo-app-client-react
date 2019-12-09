export namespace HomePageTypes {
  type tabBarContent = {
    todos: JSX.Element
    user: JSX.Element
  }
  export interface HomePageState {
    tabBarContent: tabBarContent
  }
}

export namespace TabBarTypes {
  export type TabKeys = 'todos' | 'user'
  export interface TabBarProps extends HomePageTypes.HomePageState {
    onTabBarChange?(tabKey: TabKeys): void
  }
  export interface TabBarState {
    selectedTab: TabKeys
  }
}

export namespace LoginTypes {
  export interface LoginErrorState {
    usernameError: boolean
    passwordError: boolean
  }
  export interface LoginValueState {
    [type: string]: boolean | string
    username: string
    password: string
  }
  export type LoginState = Partial<LoginErrorState & LoginValueState>
}

export type ListItemRules = Partial<{
  title: string
  arrowDirection: 'horizontal' | 'down' | 'up' | 'empty'
  thumb: string
}>

export namespace UserTypes {
  export interface UserInfoProps {
    avatarSrc: string
    nickName: string
  }
  export interface UserState {
    userInfo: UserInfoProps
  }
  export type UserListKeys = 'settings' | 'album'
  export type UserListProps = {
    options: {
      [k in UserListKeys]?: ListItemRules
    } & {
      [x: string]: ListItemRules
    }
    onClick?(option: UserListKeys, rules?: ListItemRules): void
  }
}
