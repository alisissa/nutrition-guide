import Vue from 'vue'
import Vuex from 'vuex'
import { EDAMAM } from '@/apis/edamam';

Vue.use(Vuex)

const state = {
  foodList: [],
  status: {
    loading: false,
    success: false,
    error: null
  }
}

export const mutations = {
  SET_ITEMS: (state, payload) => {
    // clone foodList to another list
    let uniqueList = [...state.foodList]
    // push items from payload to uniqueList using the spread operator
    uniqueList.push(...payload)
    // filter out any duplicates based on foodId
    uniqueList = uniqueList.filter((v, i, a) => a.findIndex(t => (t.food.foodId === v.food.foodId)) === i)
    // set new state
    state.foodList = [...uniqueList]
  },
  CLEAR_ITEMS: (state) => {
    state.foodList = []
  },
  LOADING: (state) => {
    state.status = {
      loading: true,
      success: false,
      error: null
    }
  },
  SUCCESS: (state) => {
    state.status = {
      loading: false,
      success: true,
      error: null
    }
  },
  ERROR: (state, payload) => {
    state.status = {
      loading: false,
      success: false,
      error: payload
    }
  }
}


export const actions = {
  getFoodItems({ commit }, payload) {
    // commit LOADING until the promise is fulfilled
    commit('LOADING')
    if (payload.clearItems) {
      delete payload['clearItems']
      commit('CLEAR_ITEMS')
    }

    return EDAMAM.get('/parser', { params: payload })
      .then(response => {
        commit('SET_ITEMS', response.data.hints)
        commit('SUCCESS')
      })
      .catch(() => {
        // commit error if the promise was rejected, also I am demonstrating here how to handle the server errors and
        // translate them to application friendly error.
        // for the purpose of this assignment, I am assuming that I am getting the error 400.
        commit('ERROR', {
          status: 400,
          message: 'an error has occured'
        })
      })
  }
}

export const getters = {
  foodList: (state) => state.foodList,
  status: (state) => state.status
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
