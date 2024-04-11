<template>
  <div>
    <Spinner :loading="$store.state.reusable.loading" />

    <flash-message
      v-if="$store.state.reusable.success"
      :message="$store.state.reusable.message"
    />
    <div class="login-content">
      <h1 class="head-element h4 text-center">Login</h1>
      <div class>
        <form @submit.prevent="login">
          <div class="form-login">
            <input
              type="email"
              class="form-input__login"
              name="email"
              v-model="email"
              placeholder="Email"
            />
          </div>

          <div class="form-login">
            <input
              placeholder="Password"
              type="password"
              name="password"
              v-model="password"
              class="form-input__login"
            />
          </div>

          <div class="form-login">
            <button class="btn btn-primary" @click="login">Login</button>
          </div>
        </form>

     
      </div>
    </div>
  </div>
</template>

<script>
import FlashMessage from '~/components/reusable/FlashMessage.vue'
import Spinner from '~/components/reusable/Spinner.vue'


export default {
  components: {
    FlashMessage,
    Spinner
 

  },
  

  methods: {
    async login() {
      try {

        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        })

      } catch (e) {
        console.log(e)

      }
    },
  },
  data() {
    return {
      email: '',
      password: '',

    }
  },
}
</script>

<style scoped>
.form-login {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.form-input__login {
  width: 100%;
}
.btn {
  font-size: 1.2rem;
  display: block;
  width: 80%;
  margin: auto;
  border-radius: 0.5rem;
}
.head-element {
  font-size: 1.8rem;

  margin-top: 1rem;
  text-transform: capitalize;
}
.form-login {
  text-transform: capitalize;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.form-input__login {
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
  height: 3rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: block;
  color: #333;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.6rem;
}

.form-input__login:focus {
  border: rgba(40, 150, 239, 255) 2px solid;
  height: 3rem;
  border-radius: 0.5rem;
  outline: 0;
  padding: 0 1rem;
}
.login-content {
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 50%);
  border-radius: 1rem;
}
</style>
