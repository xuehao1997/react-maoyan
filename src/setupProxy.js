//配置反向代理
//使用中间件
const proxy = require( 'http-proxy-middleware' );
module.exports = function ( app ) {
    app.use(proxy(
        '/ajax',{//   '/ajax 表示代理路径'
            target:'http://m.maoyan.com',//target表示目标服务器的地址
            changeOrigin:true
        }
    ))
}
//https://blog.csdn.net/liuyuhua666/article/details/99175066