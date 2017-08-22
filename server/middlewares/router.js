import Router from 'koa-router'
import config from '../config'
import sha1 from 'sha1'
import getWechat from '../wechat/index'
export const router = app=>{
	const router = new Router()
	console.log(2)
	router.get('/wechat-hear',(ctx,next)=>{
		console.log(1)
		const token = config.wechat.token
		const {
			signature,
			nonce,
			timestamp,
			echostr
		} = ctx.query

		const str = [token,timestamp,nonce].sort().join('')
		const sha = sha1(str)
		console.log(sha===signature)
		if(sha===signature){
			ctx.body = echostr
		}else{
			ctx.body = 'Failed'
		}
	})
	app.use(router.routes())
	app.use(router.allowedMethods())
}