const path = require('path')
const {
  override,
  addWebpackAlias,
  fixBabelImports,
  adjustWorkbox,
  setWebpackOptimizationSplitChunks,
  addDecoratorsLegacy,
  addLessLoader,
  addBabelPlugins
} = require('customize-cra')

// Enable source map in dev-env
const rewiredSourceMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-eval-source-map' : false
  return config
}

const enableTreeShaking = () => config => {
  config.optimization.usedExports = true
  return config
}

const enhanceStyleLoader = () => config => {
  const rules = config.module.rules.find(r => r.hasOwnProperty('oneOf'))
  // Register common scss to global
  const sassStyleRules = rules.oneOf.filter(r => r.test instanceof RegExp && (r.test.test('*.scss') || r.test.test('*.module.scss')))
  if (sassStyleRules.length) {
    sassStyleRules.forEach(rule => {
      const resourcesLoader = rule.use.find(l => l.loader && l.loader === 'sass-resources-loader')
      if (!resourcesLoader) {
        rule.use.push({
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: [
              path.resolve(__dirname, '../src/assets/scss/vars.scss'),
              path.resolve(__dirname, '../src/assets/scss/mixins.scss'),
              path.resolve(__dirname, '../src/assets/scss/placeholders.scss')
            ]
          }
        })
      }
    })
  }
  return config
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, '../src'),
    ['assets']: path.resolve(__dirname, '../src/assets'),
    ['icons']: path.resolve(__dirname, '../src/assets/icons'),
    ['scss']: path.resolve(__dirname, '../src/assets/scss')
  }),
  setWebpackOptimizationSplitChunks({
    automaticNameDelimiter: '--',
    maxInitialRequests: 6,
    cacheGroups: {
      vendors: {
        name: 'vendors',
        chunks: 'initial',
        test: /[\\/]node_modules[\\/]/,
        priority: 2
      },
      lodash: {
        name: 'lodash',
        test: module => {
          return /lodash/g.test(module.context)
        },
        chunks: 'initial',
        priority: 10
      },
      moment: {
        name: 'moment',
        test: module => {
          return /moment/g.test(module.context)
        },
        chunks: 'initial',
        priority: 10
      },
      react: {
        name: 'react',
        test: module => {
          return /react|react-dom|react-router-dom|react-redux/g.test(module.context)
        },
        chunks: 'initial',
        priority: 10
      },
      react: {
        name: 'antd-mobile',
        test: module => {
          return /antd|antd-mobile/g.test(module.context)
        },
        chunks: 'initial',
        priority: 10
      }
    }
  }),
  adjustWorkbox(wb => {
    Object.assign(wb, {
      skipWaiting: true
    })
  }),
  rewiredSourceMap(),
  enableTreeShaking(),
  addDecoratorsLegacy(),
  enhanceStyleLoader(),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: require('../package.json').theme
  }),
  ...addBabelPlugins(
    '@babel/plugin-proposal-optional-chaining'
  )
)
