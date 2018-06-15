import axios from 'axios'

const baseUrl = ''
class Services {
  getWechatSignature (url) {
    return axios.get(`${baseUrl}/wechat-signature?url=${url}`)
  }

  getUserByOAuth (url) {
    return axios.get(`${baseUrl}/wechat-oauth?url=${url}`)
  }

  fetchHouses () {
    return axios.get(`${baseUrl}/wiki/houses`)
  }

  fetchHouse (id) {
    return axios.get(`${baseUrl}/wiki/houses/${id}`)
  }

  fetchCharacters () {
    return axios.get(`${baseUrl}/wiki/characters`)
  }

  fetchCharacter (id) {
    console.log(id, 'id======')
    return axios.get(`${baseUrl}/wiki/characters/${id}`)
  }
}
export default new Services()
