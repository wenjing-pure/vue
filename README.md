## 代码千万条，规范第一条
## 代码不规范，亲人两行泪



## 发表评论
1. 把文本框做一个双向数据绑定
2. 为发表评论按钮绑定事件
3. 校验评论的内容是否为控，为空提示用户'评论内容不能为空'
4. 通过 vue-resource 发送一个请求，把我们评论的内容方法哦服务器中去
5. 当发表成功后，重新刷新列表，以获取最新数据
+ 如果调用 getComments 方法重新获取列表的话，假如当前处在第二页，此时添加数据之后，只展示新数据和第二页的数据，第一页的数据就不回展示
+ 换一种思路：我们可以在成功评论之后，手动拼接出一个对象，把它拼接到 content 这个数组的最前面，这样就可以达到发表评论的需求

## 绘制图片列表
1. 顶部的滑动条制作  
+ /笔记/vue/mui-master/examples/hello-mui/examples/tab-top-webview-m 中的slider中的 .mui-fullScreen 要取消
+ 滑动条无法正常滑动，检查官方文档发现，这是一个js 组件，需要初始化；
  + 导入 mui.js
  + 调用官方提供的方法初始化
  ```
  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
  ```
+ 上面执行之后出现问题 `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`
  + 使用webpack打包，默认使用严格模式，导致两者冲突
  + 解决方式：
    + 安装插件
      cnpm i babel-plugin-transform-remove-strict-mode
    + 在 .babelrc配置文件
      "ignore": [
        "./src/lib/mui/js/mui.min.js"
      ]
+ 刚进入图片分享的时候，滑动区域不能正常使用，需要在 mounted 上挂载我们的 滑动组件的初始化
2. 制作底部的图片列表
+ 图片懒加载 mint-ui