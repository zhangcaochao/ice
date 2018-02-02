import config from '../config/index'
import Wechat from '../wechat-lib/index'
import WechatOAuth from '../wechat-lib/oauth'

import mongoose from 'mongoose'

const Token = mongoose.model('Token')
const Ticket = mongoose.model('Ticket')

const wechatconfig = {
  wechat: {
    appID: config.wechat.appID,
    appSecret: config.wechat.appSecret,
    token: config.wechat.token,
    getAccessToken: async () => await Token.getAccessToken(),
    saveAccessToken: async (data) => await Token.saveAccessToken(data),
    getTicket: async () => await Ticket.getTicket(),
    saveTicket: async (data) => await Ticket.saveTicket(data)
  }
}

export const getWechat = () => {
  const client = new Wechat(wechatconfig.wechat)
  return client
}

export const getOAuth = () => {
  const oauth = new WechatOAuth(wechatconfig.wechat)

  return oauth
}
