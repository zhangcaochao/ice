import request from 'request-promise'
export default class Wechat {
  constructor (opts) {
    this.appId = opts.appId
    this.appSecret = opts.Secret
    this.token = opts.token
    this.getAccessToken = opts.getAccessToken
    this.saveAccessToken = opts.saveAccessToken
    this.getAccessToken()
  }

  async request (options) {
    options = Object.assign({}, options, {json: true})
    try{
        const response = request(options)
    }catch(e){
        console.error(e)
    }
  }

  async fetchAccessToken(){
      let data = this.getAccessToken()
      if(!this.isValidToken){
        data = this.updateToken()
      }
      await saveAccessToken(data)
      return data
  }
}
