
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: {
    name: '张三'
  },
  count: 0
}

const mutations = {// 模仿ajax获取新数据后 动态更新data
  GETLIST (state, amount) {
    state.list = amount
  },
  INCREASE (state, amount) {
    state.count = state.count + amount
  },
  Reduce (state, amount) {
    state.count = state.count - amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})
