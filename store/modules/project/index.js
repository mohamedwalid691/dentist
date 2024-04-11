import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getter.js'
export default {
  namespaced: true,

  state() {
    return {
      nameEn: '',
      nameAr: '',
      DescriptionAr:"",
      DescriptionEn:"",
      image: '',

 
 
   
     
 
     
   

      projects: [],
      allProjects: [],
    }
  },
  mutations,
  actions,
  getters,
}
