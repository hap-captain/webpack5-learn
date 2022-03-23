
### 安装使用css-loader、style-loader、less-loader
1. 在项目根目录下打开终端，输入：
```javascript
	npm install css-loader -D
	npm install style-loader -D
	npm install less-loader less -D
```

2. 在webpack.config.js 文件中的 module 下添加新的rule  
```javascript
	{
		test:/\.css$/,
		use:['style-loader', 'css-loader','less-loader']
	}
```

3. 在assets 文件夹下创建新的文件夹css，并添加一个命名为 style.css 文件
在style.css 文件中写入
```css
	.hello{
		color: red;
	}
```

4. 在assets 的css文件夹中，并添加一个命名为 style.less 文件
在style.less 文件中写入
```css
	@color:#f9efd4;
	body{
		background-color: @color;
	}
```

5. 在index.js 文件中引入 style.css,并使用其中的样式
```javascript
   import '../assets/css/style.css'
   import '../assets/css/style.less'
   document.body.classList.add('hello')
```
重新构建项目，即可看到效果

### 安装使用 mini-css-extract-plugin
1. 在项目根目录下打开终端，输入：
```javascript
	npm install mini-css-extract-plugin -D
```
2. 修改webpack.config.js
```javascript
   //引入插件
   const MiniCssExtractPlugin = require('mini-css-extract-plugin')
   // 创建一个新的插件对象
   plugins:[
    ....
	....
   new MiniCssExtractPlugin({
   	filename:'style/[contenthash].css'
   })
   ],
   //修改moudle 
   module:{
   	rules:[
		....
		....
   		{
   			test:/\.(css|less)$/,
   			use:[MiniCssExtractPlugin.loader, 'css-loader','less-loader']
   		}
   	]
   }
```
重新构建项目，即可看到效果,dist 文件夹下生成了style 文件夹，里面有一个css文件，把assets文件
夹下的两个css文件合并到一起，并且修改app.html中的css引用

### 安装使用 css-minimizer-webpack-plugin
1. 在根目录终端输入：
```javascript
	npm install css-minimizer-webpack-plugin -D
```
2. 修改webpack.config.js
```javascript
   //引入插件
   const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
   // 修改mode
   mode:'production',
   //新添加 optimization 参数
   optimization:{
   	minimizer:[
   		new CssMinimizerPlugin()
   	]
   }
```
重新构建项目，即可看到效果,dist > style 的css文件已经被压缩了 