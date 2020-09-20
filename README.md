## 一个简单的发布系统

- server 模拟真实线上运行服务
- publish-tool 资源发布工具（客户端）
- publish-vanilla 处理发布工具的服务（服务端）
- check 无头浏览器测试dom元素

> 无头浏览器需要去https://phantomjs.org/download 下载该js，可以理解为基于node的改造，提供更多能力

### 发布系统工作流程介绍
> 项目完成时执行对应的npm publish scripts,scripts可以对应一个node的shell调用该工具，该工具执行前需在github创建对应的github app,实际项目中发布系统需做权限管理，使用github登录。


### github OAuth流程
 第4、5步可以根据自己时间项目情况来觉得，客户端获取到access_token也可以存储下来，权限校验这不根据自己业务系统来决定，这里是单独流程，需涉及到表的涉及等细节。
1. 跳转github登录url，参数需携带client_id等创建app时的信息
2. 授权成功后携带code跳转至指定callback url(发布工具服务端)
3. 发布工具服务端根据code请求github api获取access_token，并生成a标签响应
4. 用户点击有access_token的链接请求发布工具服务端接口
5. 发布工具服务端拿到access_token请求github获取用户信息并做对用户权限校验
6. 用户有权限发布时会根据项目build出的资源进行压缩并上传至应用服务器
