<template>
  <div class="admin-content col-10 no-gutters">
    <div class="mx-5 mt-5">
      <h1 class="text-capitalize h3 text-body">{{ $t("customerRequest") }}</h1>

      <div class="rder bg-white rounded shadow-sm px-2 py-2 mt-4">
        <user-request-table
          :requests="$store.state.admin.customerRequests"
          @delete-data="deleteData"
          @update-request="updateRequest"
          @cancel-request="cancelRequest"

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

import UserRequestTable from "~/components/tables/UserRequestTable.vue";

export default {
  components: {
    PaginationNav,

    UserRequestTable,
  },

  layout: "admin",
  async created() {
    this.$store.dispatch("admin/paginationDataCustomerRequest", {
      page: this.$route.query.page,
    });
  },

  methods: {
    changePage(page) {
      this.$store.dispatch("admin/paginationDataCustomerRequest", {
        page: page,
        order: this.$route.query.order,
        orderBy: this.$route.query.orderBy,
      });
    },
  
    updateRequest({id,action}){
    this.$store.dispatch("admin/update", {
        id: id,
        action
      });
  },
  cancelRequest({id,action}){
    this.$store.dispatch("admin/update", {
        id: id,
        action
      });
  },
    deleteData({ id }) {
      this.$store.dispatch("admin/cancelRequest", {
        userId: id,
        type: "admin",
      });
    },
  },
};
</script>

<style></style>
