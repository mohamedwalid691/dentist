import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getter.js";
export default {
  namespaced: true,

  state() {
    return {
      name: "",
      email: "",
      mobile: "",
      statusEn:"",
      statusAr:"",
      admins: [],
      users: [],
      titleEn:"",
      titleAr:"",

      bodyEn:"",
      bodyAr:"",
      customerRequests: [],
      requestData: {},

      leftUpTooth: "",
      rightUpTooth: "",
      leftDownTooth: "",
      rightDownTooth: "",
    };
  },
  mutations,
  actions,
  getters,
};
