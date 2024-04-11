<template>
  <nav
    v-if="allLinks > 1"
    class="mt-4 d-flex flex-row justify-content-center"
    aria-label="Page navigation   "
  >
    <ul class="pagination">
      <li v-for="link in links" :key="link.url" class="page-item">
        <!-- :to="`${$route.path}?page=${link.label}`" -->
        <nuxt-link
          :to="
            localePath({
              name: `${$route.name.replace('___en', '')}`,
              query: {
                ...$route.query,
                page: link.label,
              },
            })
          "
          :class="{ 'active-link': activePage == link.label }"
          class="page-link"
          >{{ link.label }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['links'],

  computed: {
    allLinks() {
      return this.links.length
    },
    activePage() {
      return this.$route.query.page
    },
    page() {
      return this.$route.query.page
    },
  },
  watch: {
    page() {
      this.$emit('change-page', this.$route.query.page)
    },
  },
}
</script>

<style scoped>
.active-link {
  background: #0d6efd;
  color: white;
}
</style>
