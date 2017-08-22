import request from 'request-promise'
const base = 'https://api.weixin.qq.com/cgi-bin/'
let api={
  accessToken: base + 'token?grant_type=client_credential',
}
export default class Wechat {
  constructor (opts) {
    this.appID = opts.appID
    this.appSecret = opts.appSecret
    this.token = opts.token
    this.getAccessToken = opts.getAccessToken
    this.saveAccessToken = opts.saveAccessToken
    this.fetchAccessToken()
  }

  async request (options) {
    options = Object.assign({}, options, {json: true})
    try{
        const response = request(options)
        return response
    }catch(e){
        console.error(e)
    }
  }

  async fetchAccessToken(){
      let data = await this.getAccessToken()
      if(!this.isValidAccessToken(data,'access_token')){
          data = await this.updateAccessToken()
      }
      console.log(data)
      await this.saveAccessToken(data)

      return data
  }

  async updateAccessToken(){
      const url = api.accessToken + '&appid=' + this.appID + '&secret=' + this.appSecret
      const data = await this.request({url:url})
      const now = (new Date().getTime())
      const expiresIn = now + (data.expires_in - 20) * 1000
      data.expires_in = expiresIn
      return data
  }

  isValidAccessToken (data, name) {
    if (!data || !data[name] || !data.expires_in) {
            return false
      }
      const expiresIn = data.expires_in
      const now = (new Date().getTime())
      if (now < expiresIn) {
          return true
      } else {
          return false
    }
  }
}
