<template>
  <div class="admin-content col-10 no-gutters">
    <div class="mx-5 mt-5">
      <h1 class="text-capitalize h3 text-body">{{ $t("admins") }}</h1>

      <div class="rder bg-white rounded shadow-sm px-2 py-2 mt-4">
        <admin-table
          :admins="$store.state.admin.admins"
          @delete-data="deleteData"
        />

        <pagination-nav
          :links="$store.state.reusable.links"
          @change-page="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PaginationNav from "~/components/admin/reusalbe/PaginationNav.vue";
import AdminTable from "~/components/tables/AdminTable.vue";

export default {
  components: {
    PaginationNav,
    AdminTable,
  },

  layout: "admin",
  async created() {
    this.$store.dispatch("admin/paginationDataAdmin", {
      page: this.$route.query.page,
    });
  },
  methods: {
    changePage(page) {
      this.$store.dispatch("admin/paginationDataAdmin", {
        page: page,
        order: this.$route.query.order,
        orderBy: this.$route.query.orderBy,
      });
    },

    deleteData({ id }) {
      this.$store.dispatch("admin/deleteData", { userId: id, type: "admin" });
    },
  },
};
</script>

<style></style>
