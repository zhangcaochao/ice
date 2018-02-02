import Router from 'koa-router'
import config from '../config'
import {resolve} from 'path'
import sha1 from 'sha1'
import getWechat from '../wechat/index'
import wechatmiddle from '../wechat-lib/wechatmiddle'
import {signature, redirect, oauth} from '../controllers/wechat'
import reply from '../api/reply'
export const router = app => {
  const router = new Router()
  router.all('/wechat-hear', wechatmiddle(config.wechat, reply))
  router.get('/upload', async (ctx, next) => {
    let mp = require('../wechat')
    let client = mp.getWechat()
    const data = await client.handle('uploadMaterial', 'video', resolve(__dirname, '../../ice.mp4'), {type: 'video',
      description: '{"title":"haha", "introduction":"hehe"}'})
    console.log(data)
  })
  router.get('/wechat-signature', signature)
  router.get('/wechat-oauth', oauth)
  router.get('/wechat-redirect', redirect)
  app.use(router.routes())
  app.use(router.allowedMethods())
}
