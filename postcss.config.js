import autoprefixer from 'autoprefixer'
import cssMqpacker from 'css-mqpacker'
import postcssAssets from 'postcss-assets'

import config from './config'

export default {
  plugins: [
    autoprefixer({
      grid: 'autoplace'
    }),
    cssMqpacker({
      sort: true
    }),
    postcssAssets({
      basePath: config.distDir
    })
  ]
}
