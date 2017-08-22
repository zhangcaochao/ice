import Router from 'koa-router'
import config from '../config'
import sha1 from 'sha1'
import getWechat from '../wechat/index'
import wechatmiddle from '../wechat-lib/wechatmiddle'
import reply from '../api/reply'
export const router = app=>{
	const router = new Router()
	router.all('/wechat-hear',wechatmiddle(config.wechat,reply))
	app.use(router.routes())
	app.use(router.allowedMethods())
}