
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
	entry:'./src/index.js',
	
	output:{
		filename: 'bundle.js',
		path:path.resolve(__dirname,'./dist'),
		clean:true
	},
	
	mode:'production',
	
	devtool:'inline-source-map',
	
	plugins:[
		new HtmlWebpackPlugin({
			template :'./index.html',
			filename:'app.html',
			inject:'body'
		}),
		
		new MiniCssExtractPlugin({
			filename:'style/[contenthash].css'
		})
	],
	
	devServer:{
		static:'./dist'
	},
	
	module:{
		rules:[
			{
				test:/\.png$/, //定义加载资源的格式
				type:'asset/resource', //定义资源类型为resource
				generator:{
					filename:'images/[contenthash][ext]' //设置资源打包路径和重命名
				}
			},
			
			{
				test:/\.svg$/,
				type:'asset/inline' //该类型资源只能在线浏览
			},
			
			{
				test:/\.txt$/,
				type:'asset/source' //导出的是资源的原始类型
			},
			
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
			},
			
			{
				test:/\.(css|less)$/,
				use:[MiniCssExtractPlugin.loader, 'css-loader','less-loader']
			}
		]
	},
	
	optimization:{
		minimizer:[
			new CssMinimizerPlugin()
		]
	}
}