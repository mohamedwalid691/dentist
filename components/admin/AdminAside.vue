<template>
  <aside class="aside col-2 bg-primary__admin text-white">
    <div class="d-flex flex-row justify-content-between my-2 mx-2">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <i class="far fa-bell mx-2 font-size__1-3"></i>

        <i class="far fa-user-circle mx-2 font-size__1-3"></i>
      </div>
    </div>
    <div class="aside-profile__holder my-4 mx-5">
      <img
        src="../../assets/images/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
        class="rounded-circle d-block text-center w-50 container"
        alt
      />
    </div>
    <div class="container">
      <h5 class="Bootstrap heading text-white text-center text-capitalize">
        {{ name }}
      </h5>
      <p class="text-center text-secondary">{{ email }}</p>
    </div>

    <div class="mt-5 px-2 aside-links">
      <div
        role="button"
        class="d-flex flex-row justify-content-between align-items-center text-secondary"
        data-bs-toggle="collapse"
        href="#catalog"
        aria-expanded="false"
        aria-controls="catalog"
      >
        <div class="d-flex align-items-center">
          <i class="fas fa-database text-white"></i>
          <a
            class="text-capitalize btn border-0 my-2 ml-2 d-block text-start font-wight text-white"
            >{{ $t("catalog") }}</a
          >
        </div>

        <i class="fas fa-chevron-right px-3"></i>
      </div>
      <div class="mx-3 catalog collapse" id="catalog">
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-project-list',
              query: {
                page: 1,
              },
            })
          "
          >{{ $t("projectList") }}</nuxt-link
        >
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="localePath({ name: 'admin-project-add' })"
          >{{ $t("project") }}</nuxt-link
        >

        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-slider-list',
              query: {
                page: 1,
              },
            })
          "
          >{{ $t("sliderList") }}</nuxt-link
        >
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="localePath({ name: 'admin-slider-add' })"
          >{{ $t("slider") }}</nuxt-link
        >

        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-color-list',
              query: {
                page: 1,
              },
            })
          "
          >{{ $t("colorList") }}</nuxt-link
        >
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="localePath({ name: 'admin-color-add' })"
          >{{ $t("color") }}</nuxt-link
        >

        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-second-color-list',
              query: {
                page: 1,
              },
            })
          "
          >{{ $t("secondColorList") }}</nuxt-link
        >
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="localePath({ name: 'admin-second-color-add' })"
          >{{ $t("secondColor") }}</nuxt-link
        >

        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-third-color-list',
              query: {
                page: 1,
              },
            })
          "
          >{{ $t("thirdColorList") }}</nuxt-link
        >
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="localePath({ name: 'admin-third-color-add' })"
          >{{ $t("thirdColor") }}</nuxt-link
        >
      </div>

      <div
        role="button"
        class="d-flex flex-row justify-content-between align-items-center text-secondary"
        data-bs-toggle="collapse"
        href="#customer"
        aria-expanded="false"
        aria-controls="customer"
      >
        <div class="d-flex align-items-center">
          <i class="far fa-user text-white"></i>
          <a
            class="text-capitalize btn border-0 my-2 ml-2 d-block text-start font-wight text-white"
            >{{ $t("users") }}</a
          >
        </div>

        <i class="fas fa-chevron-right px-3"></i>
      </div>
      <div class="mx-3 customer collapse" id="customer">
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-user-add-admin',
            })
          "
          >{{ $t("addAdmin") }}</nuxt-link
        >

        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-user-admin',
            })
          "
          >{{ $t("admins") }}</nuxt-link
        >

        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-user-users',
            })
          "
          >{{ $t("users") }}</nuxt-link
        >
      </div>
      <div
        role="button"
        class="d-flex flex-row justify-content-between align-items-center text-secondary"
        data-bs-toggle="collapse"
        href="#order"
        aria-expanded="false"
        aria-controls="order"
      >
        <div class="d-flex align-items-center">
          <i class="fas fa-shopping-cart text-white"></i>
          <a
            class="text-capitalize btn border-0 my-2 ml-2 d-block text-start font-wight text-white"
            >customerRequests</a
          >
        </div>

        <i class="fas fa-chevron-right px-3"></i>
      </div>



      
      <div class="mx-3 order collapse" id="order">
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-customer-request',
            
            })
          "
          >customerRequest</nuxt-link
        >
      </div>











      <div
      role="button"
      class="d-flex flex-row justify-content-between align-items-center text-secondary"
      data-bs-toggle="collapse"
      href="#notification"
      aria-expanded="false"
      aria-controls="notification"
    >
      <div class="d-flex align-items-center">
        <i class="fas fa-shopping-cart text-white"></i>
        <a
          class="text-capitalize btn border-0 my-2 ml-2 d-block text-start font-wight text-white"
          >notification</a
        >
      </div>

      <i class="fas fa-chevron-right px-3"></i>
    </div>


      <div class="mx-3 order collapse" id="notification">
        <nuxt-link
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          :to="
            localePath({
              name: 'admin-notification-send',
            
            })
          "
          >sendNotification</nuxt-link
        >
      </div>

      <div class="d-flex align-items-center ml-2">
        <i class="fas fa-sign-out-alt"></i>
        <a
          ref="#"
          @click="logout"
          class="text-capitalize btn text-white border-0 my-2 d-block text-start font-wight"
          to="/"
          >logout</a
        >
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    logout(e) {
      this.$store.commit("logout");
    },
    showState(action) {
      const hasPermission = this.$store.state.roles.find(
        (ro) => ro.name_en == action
      );
      if (hasPermission) return true;
      else return false;
    },
  },
  computed: {
    name() {
      return this.$store.state.userState.name;
    },
    email() {
      return this.$store.state.userState.email;
    },
  },
};
</script>

<style scoped>
.nuxt-link-active {
  background: rgba(241, 245, 249, 0.12);
}
</style>
