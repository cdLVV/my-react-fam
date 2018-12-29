const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'production', 可以在package.json里指定mode,不同的mode会启用不同的插件,如果是production,打包出来的文件会小很多
  /*入口*/
  entry: [
    '@babel/polyfill', // 添加一些方法,比如静态方法如Array.from或Object..，实例方法如Array.prototype.include，以及generator函数
    // 'react-hot-loader/patch',// 开启react代码的模块热替换（HMR）
    path.join(__dirname, 'src/index.js')
  ],
  // entry: {
  //     app: [
  //         '@babel/polyfill',
  //         path.join(__dirname, 'src/index.js')
  //     ],
  //     // vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'] // 这个方式已经被取消了在webpack4中. 和第三方插件分开打包,把react等库生成打包到vendor.hash.js里面去,避免了修改代码,这些插件重新打包
  // },

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    // filename: 'bundle.js', // 该文件是在dist/index.html里写死的
    // chunkFilename: '[name].js'
    filename: '[name].[hash].js', // 不用上面的是因为缓存问题,如果某天我们修改了代码,可能用户还是访问的缓存的文件,因为最近开始是写死的,所以还需要用上HtmlWebpackPlugin,这个插件，每次会自动把js插入到你的模板index.html里面去。
    chunkFilename: '[name].[chunkhash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, // 服务器端开启压缩
    port: 9000,
    historyApiFallback: true,
    host: '0.0.0.0',
    // hot: true // 是否启用webpack-dev-server的热加载
  },
  module: {
    rules: [{
      test: /\.js$/,
      // include: path.join(__dirname, 'src'),
      use: [{ loader: 'babel-loader' },
        // { loader: 'eslint-loader' }
      ],
    }, { // options limit 8192意思是，小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.svg/,
      use: ['svg-inline-loader'] // , 'file-loader'
    }, {
      // test: /\.less$/,
      test: /\.(css|less)$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader", // https://github.com/webpack-contrib/css-loader
        options: {
          sourceMap: true,
          importLoaders: 1, //  Number of loaders applied before CSS loader
          modules: true // 使文件能被引入
        } // translates CSS into CommonJS
      }, {
        loader: "less-loader",
        options: {
          // strictMath: true,
          // noIeCompat: true,
          name: '[name].[hash].[ext]',
          sourceMap: true, // 这个设置为true之后,在浏览器的请求里,能看到css的文件
          modules: true // 使文件能被引入,放在这里没有用
        } // compiles Less to CSS
      }]
    }]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Webpack App',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.optimize.RuntimeChunkPlugin({
      name: "manifest"
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        //打包重复出现的代码
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|redux|react-redux)[\\/]/,
          filename: '[name].bundle.js', // [name].[hash].js
          chunks: "all", // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          minSize: 0, // 最小尺寸，默认0
          minChunks: 1, // 最小 chunk ，默认1
          maxInitialRequests: 5, // 最大初始化请求书，默认1
          maxAsyncRequests: 1, // 最大异步请求数， 默认1
          // reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
        },
        //打包第三方类库
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      routes: path.join(__dirname, 'src/routes'), // 每个路由的组件
      components: path.join(__dirname, 'src/components'), // 公共组件
      layouts: path.join(__dirname, 'src/layouts'), // 基本的布局
      svg: path.join(__dirname, 'src/svg'), //
      routesConfig: path.join(__dirname, 'src/routesConfig'), // 路由的基本配置文件
      services: path.join(__dirname, 'src/services'), // 接口
      utils: path.join(__dirname, 'src/utils'), // 一些工具
    }
  },
};