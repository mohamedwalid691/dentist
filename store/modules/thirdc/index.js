import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getter.js'
export default {
  namespaced: true,

  state() {
    return {
      nameEn: '',
      nameAr: '',
      color:"",
     

      colors: [],
      allColors: [],
    }
  },
  mutations,
  actions,
  getters,
}
