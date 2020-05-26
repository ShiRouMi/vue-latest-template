import Vue from "vue"
import Vuex from "vuex"
import { getMockData } from "@/api"
Vue.use(Vuex)

const state = {
  slideData: [],
  totalCount: 0
}

const getters = {}

const mutations = {
  getData(state, result) {
    // 分页请求的时候将请求到的数据存储下来
    // 前进后退，根据「存储数量」与「请求起始索引」判断是否需要再次请求
    // 一开始我思考的是在子组件里进行缓存处理，可事实上行不通。每次数据更新组件都会重新渲染
    // 父组件传递值给子组件，所以值需要在父组件做处理。
    // 再向上一步就是在请求数据的时候进行处理。
    state.slideData = state.slideData.concat(result.data)
    state.totalCount = result.totalCount
  }
}

const actions = {
  getData(context, args) {
    let result = getMockData(args)
    context.commit("getData", result)
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})