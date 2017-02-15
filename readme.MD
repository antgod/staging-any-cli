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
3. 输入项目名称,回车确定
```
Project Name: Cicada-Process
```
4. 创建项目，进入项目目录
```
cd Cicada-Process
```
5. 编写组件，组件复合logo规范(*请参考examples/Input/index.jsx示例代码*)
```
vi components/index.jsx
```
6. 预览/调试项目代码
```
tnpm start
```
7. 发布项目代码
```
vi package.json
#修改包名
#示例：name: '@alipay/cicada-process'
#提交gitlab
git add . && git commit -m 'message' && git push origin master
#创建用户名密码
tnpm addUser
#发布
tnpm publish
```