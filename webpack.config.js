var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

// 当命令行形式运行 webpack 或者 webpack-dev-server 的时候，工具会发现我们并没有提供要打包的入口和出口文件，此时会检查根目录的配置文件，并读取。
module.exports ={
  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    })
  ],
  module:{
    rules:[
      { test:/\.css$/ ,use:['style-loader','css-loader']},
      { test:/\.less$/ ,use:['style-loader','css-loader','less-loader']},
      { test:/\.scss$/ ,use:['style-loader','css-loader','sass-loader']},
      { test:/\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=10000&name=[hash:8]-[name].[ext]' },// 处理 css 的 URL路径 
      { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader' }, //处理字体文件
      { test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
      { test:/\.vue$/,use:'vue-loader' }, //vue 的loader
    ]
  },
  resolve:{
    alias:{ // 修改 vue 被倒入时候的包路径
      "vue$":"vue/dist/vue.js"
    }
  }
}