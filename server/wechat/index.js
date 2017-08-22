import config from '../config/index'
import wechat from '../wechat-lib/index'
import mongoose from 'mongoose'

const Token = mongoose.model('Token')

const wechatconfig = {
    wechat:{
        appID:config.wechat.appID,
        appSecret:config.wechat.appSecret,
        token:config.wechat.token,
        getAccessToken:async ()=> await Token.getAccessToken(),
        saveAccessToken:async (data)=>await Token.saveAccessToken(data)
    }
}

export const getWechat = ()=>{
    const client = new wechat(wechatconfig.wechat)
    return client
}

getWechat()



