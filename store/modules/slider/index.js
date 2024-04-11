import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getter.js'
export default {
  namespaced: true,

  state() {
    return {
   

      image: '',

      allSliders: [],
      sliders: [],
    }
  },
  mutations,
  actions,
  getters,
}
