<template>
  <div :class="$i18n.locale == 'ar' ? 'rtl-class' : ''">
    <Spinner :loading="$store.state.reusable.loading" />
    <flash-message
      v-if="$store.state.reusable.success"
      :message="$store.state.reusable.message"
    />
    <div class="row g-0 admin-bg">
      <admin-aside />
      <div class="admin-content col-10 no-gutters">
        <admin-nav-bar />
        <nuxt class="mx-5" />
      </div>
    </div>
  </div>
</template>

<script>
import AdminAside from '~/components/admin/AdminAside.vue';
import AdminNavBar from '~/components/reusable/AdminNavBar.vue';
import FlashMessage from '~/components/reusable/FlashMessage.vue';
import Spinner from '~/components/reusable/Spinner.vue';
export default {
  methods: {},

   middleware: ['autologin', 'adminauth'],
  components: {
    AdminAside,
    Spinner,
  
    FlashMessage,
    AdminNavBar,

  },
  head() {
    return this.$nuxtI18nHead();
  },
};
</script>

<style scoped>
.nuxt-link-exact-active {
  background: rgba(241, 245, 249, 0.12);
}
</style>
