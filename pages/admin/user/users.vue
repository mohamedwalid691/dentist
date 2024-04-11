<template>
    <div class="admin-content col-10 no-gutters">
      <div class="mx-5 mt-5">
        <h1 class="text-capitalize h3 text-body">{{ $t("users") }}</h1>
  
        <div class="rder bg-white rounded shadow-sm px-2 py-2 mt-4">
          <user-table
            :users="$store.state.admin.users"
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

import UserTable from '~/components/tables/UserTable.vue';
  
  export default {
    components: {
      PaginationNav,
  
        UserTable,
    },
  
    layout: "admin",
    async created() {
      this.$store.dispatch("admin/paginationDataUser", {
        page: this.$route.query.page,
      });
    },
    methods: {
      changePage(page) {
        this.$store.dispatch("admin/paginationDataUser", {
          page: page,
          order: this.$route.query.order,
          orderBy: this.$route.query.orderBy,
        });
      },
  
      deleteData({ id }) {
        this.$store.dispatch("project/deleteData", {userId:id,type:"user"});
      },
    },
  };
  </script>
  
  <style></style>
  