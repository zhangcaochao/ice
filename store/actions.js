import Services from './services'
export default {
  getWechatSignature ({commit}, url) {
    return Services.getWechatSignature(url)
  },

  getUserByOAuth ({commit}, url) {
    return Services.getUserByOAuth(url)
  },

  async fetchHouses ({ state }) {
    const res = await Services.fetchHouses()

    state.houses = res.data.data

    return res
  },

  async fetchCharacters ({ state }) {
    const res = await Services.fetchCharacters()

    state.characters = res.data.data

    return res
  },

  async showCharacter ({ state }, _id) {
    if (_id === state.currentCharacter._id) return
    const res = await Services.fetchCharacter(_id)
    state.currentCharacter = res.data.data
    return res
  },

  async showHouse ({ state }, _id) {
    console.log(state, _id)
    if (_id === state.currentHouse._id) return

    const res = await Services.fetchHouse(_id)
    console.log(res, 'res')

    state.currentHouse = res.data.data

    return res
  }
}
