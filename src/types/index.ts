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

export type ListOptions<T extends string, R = ListItemRules> = {
  options: {
    [k in T]?: R
  } & {
    [x: string]: R
  }
  onClick?(option: T, rules?: R): void
}
export namespace UserTypes {
  export interface UserInfoProps {
    avatarSrc: string
    nickName: string
  }
  export interface UserState {
    userInfo: UserInfoProps
  }
  export type UserListKeys = 'settings' | 'album'
  export type UserListProps = ListOptions<UserListKeys>
}

export namespace NavigatorTypes {
  export interface NavigatorProps {
    mode: 'light' | 'dark'
    children: any
  }

  export interface NavigatorState {
    onLeftClick?(): void
    title: any
    leftContent: any
    rightContent: any[]
  }
}

export namespace SettingTypes {
  enum OptionKeys {
    account = 'changePwd'
  }

  interface SettingGroupsCommon<T extends string> {
    title: string
    name: T
  }

  type AccountOptions = SettingGroupsCommon<'account'> & Pick<ListOptions<OptionKeys.account>, 'options'>

  type AllOptions = (
    AccountOptions
  )

  export type AllGroupNames = (
    Pick<AccountOptions, 'name'>
  )['name']

  export type AllOptionKeys = (
    OptionKeys.account
  )

  export interface SettingProps {
    groups?: Array<AllOptions>
    onClick?(group: AllGroupNames, option: AllOptionKeys): void
  }

  export interface ChangePwdErrorState {
    currentPasswordError: boolean,
    newPasswordError: boolean,
    confirmNewPasswordError: boolean,
  }
  export interface ChangePwdValueState {
    [type: string]: boolean | string
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
  }
  export type ChangePwdState = Partial<ChangePwdErrorState & ChangePwdValueState>
}
