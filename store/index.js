import Vuex from "vuex";

import color from "./modules/color/index.js";

import secondc from "./modules/secondc/index.js";
import thirdc from "./modules/thirdc/index.js";
import slider from "./modules/slider/index.js";
import project from "./modules/project/index.js";
import admin from "./modules/admin/index.js";
import reusable from "./modules/reusable/index.js";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      color,
      secondc,
      thirdc,
      reusable,
      slider,
        admin,
      project,
    },
    state: {
      adminState: {},
      notifications: [],
      userState: {},
      doctorState: {},
      roles: [],
      isAuth: false,
      filePath: process.env.FILE_URL,
    },
    mutations: {
      showState(state, action) {
        const hasPermission = state.roles.find((ro) => ro.name_en == action);
        if (hasPermission) return true;
        else return false;
      },
      assignUser(state, { user, token }) {
        localStorage.setItem("token", token);

        state.isAuth = true;
        state.userState = user;
        if (user.role == "admin") {
          state.adminState = user;
        }
      },
      logout(state) {
        (state.adminState = {}), (state.role = ""), (state.isAuth = false);
        localStorage.removeItem("token");

        this.$router.push(this.localePath({ name: "auth-login" }));
      },
      redirectUser(state) {
        if (state.role == "doctor") {
          this.$router.push({
            name: "doctor-home",
          });
        } else if (state.role == "admin") {
          this.$router.push({
            name: "admin-home",
          });
        }
      },
    },
    actions: {
      async login(context, { email, password, role = "admin" }) {
        try {
          context.dispatch(
            "reusable/startLoading",
            {},
            {
              root: true,
            }
          );
          const config = {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          };
          const { data } = await axios.post(
            `${process.env.BASE_URL}login`,
            {
              email,
              password,
              role,
            },
            config
          );

          if (data.status) {
            context.dispatch(
              "reusable/successResponse",
              {
                data,
              },
              {
                root: true,
              }
            );
            context.commit("assignUser", {
              user: data.data,
              token: data.data.token,
            });

            this.$router.push(this.localePath({ name: `admin-dashboard` }));
          }
        } catch (e) {
          context.dispatch("reusable/errorResponse", e, {
            root: true,
          });
        }
      },

      async autoLogin(context) {
        const token = localStorage.getItem("token");
        if (token) {
          try {
            const { data } = await axios.get(
              `${process.env.BASE_URL}user/admin`,
              {
                headers: {
                  authorization: "Bearer " + token,
                  code: process.env.APPLICATION_CODE,
                },
              }
            );

            if (data.status) {
              context.commit("assignUser", {
                user: data.data,
                token: token,
              });
              return true;
            }
          } catch (e) {
            console.log(e);
          }
        }
      },
      async changePassword(context, { newPassword, oldPassword }) {
        try {
          context.dispatch(
            "reusable/startLoading",
            {},
            {
              root: true,
            }
          );
          const token = localStorage.getItem("token");
          const config = {
            headers: {
              code: process.env.APPLICATION_CODE,
              authorization: "Bearer " + token,
            },
          };
          const { data } = await axios.post(
            `${process.env.BASE_URL}change-password`,
            {
              newPassword,
              oldPassword,
            },
            config
          );

          if (data.status) {
            context.dispatch(
              "reusable/successResponse",
              {
                data,
              },
              {
                root: true,
              }
            );
          }
        } catch (e) {
          console.log(e);
          context.dispatch("reusable/errorResponse", e, {
            root: true,
          });
        }
      },
    },
  });
};
export default createStore;
