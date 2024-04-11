<template>
  <nav class="bg-white p-3 admin-nav">
    <div class="d-flex align-items-center justify-content-between">
 

      <div class="nav-icons">
        <ul class="d-flex align-items-center mb-0">
          <li class="nav-icon__list p-relative">
         
          
          
          </li>
          <nuxt-link
            class="text-dark"
            :to="
              localePath({
                name: `admin-change-password`,
              })
            "
          >
            <p class="mb-0 mx-4">
              {{ $store.state.userState.name }}
            </p></nuxt-link
          >

          <li>
            <nuxt-link
              class="text-capitalize btn text-dark border-0 mx-2 d-block text-start font-wight"
              :to="switchLocalePath('en')"
              >English</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="text-capitalize btn text-dark border-0 mx-2 d-block text-start font-wight"
              :to="switchLocalePath('ar')"
              >Arabic</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {



  methods: {
    changeNotificationBox() {
      this.$store.commit("reusable/changeNotificationBox");
    },
  },
  computed: {
    notifiactions() {
      return this.$store.state.notifications;
    },
  },
  data() {
    return {
      asideStatus: true,
    };
  },
};
</script>

<style scoped>
.notification-postion {
  position: absolute;
  top: 100%;
  right: 0;
}
.admin-nav {
  font-size: 1.2rem;
}
</style>
