1. 全局安装webpack 
当前目录下打开终端，输入
```javascript
	npm install webpack webpack-cli --global
```
查看安装情况
```javascript
	webpack -v
```
2. 安装npm包管理配置文件package.json
```javascript
	npm init -y
```
3. 本地安装webpack
```javascript
	npm install webpack webpack-cli --save-dev
```

4. 通过配置文件配置webpack参数
在项目根目录下创建webpack.config.js(名字不能随意起),然后在该文件中输入配置参数
```javascript
	const path = require('path')
		module.exports = {
		entry:'./src/index.js',
		
		output:{
			filename: 'bundle.js',
			path:path.resolve(__dirname,'./dist'),
			clean:true
		},
		
		mode:'development'
	}
```

5. 安装webpack插件 html-webpack-plugin
终端输入
```javascript
	npm install html-webpack-plugin -D
```
在webpack.config.js 里面添加新的配置参数
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	···
	···
	plugins:[
		new HtmlWebpackPlugin({
			template :'./index.html',
			filename:'app.html',
			inject:'body'
		})
	]
}
```

6. 生成打包文件
```javascript
	npx webpack
```

7. 按住webpack-dev-server,实现实时重新加载功能，
终端输入
```javascript
	npm install --save-dev webpack-dev-server
```
修改配置文件，告知dev server，从什么位置查找文件
```javascript
module.exports = {
	···
	···
	devServer:{
		static:'./dist'
	}
}
```
启动dev-server，终端输入
```javascript
	npx webpack-dev-server
```
