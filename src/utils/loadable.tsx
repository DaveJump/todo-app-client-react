import React from 'react'
import Loadable from 'react-loadable'

const LoadingComponent: React.FC = () => {
  return (
    <div>Loading...</div>
  )
}

export default (
  loader: () => Promise<any>,
  loading: React.FC<{}> = LoadingComponent
) => Loadable({ loader, loading })
