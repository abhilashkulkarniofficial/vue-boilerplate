// import shop from '../../api/shop'
// import axios from 'axios';

// state
const state = () => ({
    users:[],
    firstnames:[]
})

// getters
const getters = {
    getUsers:(state) => {
      return state.users
    },
    getFirstnames:(state) => {
      return state.firstnames
    }
}

// actions
const actions = {
  async register({commit}, userData){
    console.log(userData)
    commit('setUser', userData)
    commit('setFirstname', userData.firstName)
  }
}

// mutations
const mutations = {
    setUser(state,data){
        state.users.push(data)
    },
    clearUserData(state, data){
        state.users = data
    },
    setFirstname(state, data){
      state.firstnames.push(data)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}