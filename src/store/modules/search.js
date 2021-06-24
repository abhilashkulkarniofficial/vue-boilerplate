// import shop from '../../api/shop'
// import axios from 'axios';

// state
const state = () => ({
    user:[]
})

// getters
const getters = {
  getUser:(state) => {
    return state.user
  },
}

// actions
const actions = {
  async addUser({commit}, data){
    commit('setUser', data)
  }
}

// mutations
const mutations = {
  setUser(state,data){
    state.user = data
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}