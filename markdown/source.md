 
1.  在项目根目录下创建assets文件夹，并放进去一张图片img1.png
2.  在webpack.config.js 上添加module配置参数
+ resource
```javascript
	....
	....
	module:{
		rules:[
			{
				test:/\.png$/, //定义加载资源的格式
				type:'asset/resource', //定义资源类型为resource
				generator:{
					filename:'images/[contenthash][ext]' //设置资源打包路径和重命名
				}
			}
		]
	}
```
资源导入，在index文件中加入
 ```javascript
	import imgSrc from '../assets/img1.png'
	const img = document.createElement('img');
	img.src = imgSrc
	document.body.appendChild(img);
 ```
+ inline  
在webpack.config.js 中的module配置下添加新的rule
   ```javascript
   {
   	test:/\.svg$/,
   	type:'asset/inline' //该类型资源只能在线浏览
   }
   ```
资源导入，在index文件中加入
   ```javascript
   import logoSvg from '../assets/img2.svg'
   const img2 = document.createElement('img');
   img2.src = logoSvg;
   img2.style.cssText = 'width: 100px; height: 100px;';
   document.body.appendChild(img2)
   ```
+ sourse  
在webpack.config.js 中的module配置下添加新的rule
  ```javascript
  {
  	test:/\.txt$/,
  	type:'asset/source'  //导出的是资源的原始类型
  }
  ```
资源导入，在index文件中加入
  ```javascript
  import text from '../assets/text1.txt'
  const block = document.createElement('div');
  block.style.cssText = 'width: 200px;height: 50px;background-color: lightpink;'
  block.textContent  = text;
  document.body.appendChild(block);
  ```
  
+ asset  
在webpack.config.js 中的module配置下添加新的rule
  ```javascript
  {
  	test:/\.jpg$/,
  	type:'asset' ,//在导出一个data URL和发送一个单独文件之间自动选择
  	generator:{
  		filename:'images/[contenthash][ext]' //设置资源打包路径和重命名
  	},
  	parser:{
  		dataUrlCondition:{
  			maxSize :4 * 1024 *1024  //设置当图片大于4M时才生成一个资源文件
  		}
  	}
  }
  ```
资源导入，在index文件中加入
  ```javascript
  import jpgImg from '../assets/img3.jpg'
  const newImg = document.createElement('img');
  newImg.src = jpgImg;
  newImg.style.cssText = "width: 100px; height: 100px;";
  document.body.appendChild(newImg);
  ```