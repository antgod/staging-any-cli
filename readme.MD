##金蝉用户自定义组件脚手架

####使用方法：

1. 全局安装脚手架命令(*安装tnpm请参考http://npm.alibaba-inc.com/profile* )
```
$tnpm i @alipay/cicada-cli -g
```
2. 执行脚手架命令
```
$cicada-cli init
```
3. 输入设备(pc/mobile)，发布包名（注意，包名不能重复）, 回车确定。
```
设备(pc/mobile): pc
发布包名: cicada-crm-common-component
```
Note: 当提示"自定义组件配置结束"，留意当前目录下"发布报名"（如Cicada-crm-common-component）目录下package.json文件的name是否改变。

4. 创建项目，进入项目目录
```
cd cicada-crm-common-component
```
5. 编写组件，组件复合logo规范(*请参考examples/Input/index.jsx示例代码*)
```
vi components/index.jsx
```
6. 预览/调试项目代码
```
tnpm start
```
浏览器输入location: 8003

7. 发布项目代码
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