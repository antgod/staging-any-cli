##金蝉用户自定义组件脚手架

####使用方法：
+ 安装tnpm(安装tnpm之前需要安装node环境)
```
npm install -g tnpm --registry=http://registry.npm.alibaba-inc.com
```

+ 全局安装脚手架命令
```
$tnpm i @alipay/cicada-cli -g
```
+ 执行脚手架命令
```
$cicada init
```
+ 输入设备(pc/mobile)，发布包名（注意，包名不能重复）, 回车确定。
```
设备(pc/mobile): pc
发布包名: cicada-crm-common-component
```
Note: 当提示"自定义组件配置结束"，留意当前目录下"发布报名"（如Cicada-crm-common-component）目录下package.json文件的name是否改变。

+ 创建项目，进入项目目录初始化项目包
```
cd cicada-crm-common-component && tnpm i
```
+ 编写组件，组件复合logo规范(*请参考examples/Input/index.jsx示例代码*)
```
vi components/index.jsx
```
+ 预览/调试项目代码
```
tnpm start
```
浏览器输入location: 8003

+ 发布项目代码
```
vi package.json
#查看包名与版本号是否冲突
#示例：name: '@alipay/cicada-process'
#提交gitlab
git add . && git commit -m 'message' && git push origin master
#创建用户名密码
tnpm addUser
#发布
tnpm run publish
```