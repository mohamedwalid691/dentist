<template>
  <div class="admin-content col-10 no-gutters">
    <div class="mx-5 mt-5">
      <h1 class="text-capitalize h3 text-body">{{ $t("singleRequest") }}</h1>

      <div class="rder bg-white rounded shadow-sm px-2 py-2 mt-4">
        <single-customer-request-table />
      </div>
    </div>
  </div>
</template>

<script>
import SingleCustomerRequestTable from "~/components/tables/SingleCustomerRequestTable.vue";

export default {
  components: {
    SingleCustomerRequestTable,
  },

  layout: "admin",
  async created() {
    await this.$store.dispatch("admin/singleRequest", this.$route.params.id);
  },
  methods: {
    changeToColor(color) {
      return color.replace("0xff", "#");
    },

    downFile(file) {
      console.log(file);
      file.replace("storage/app/", "");
      // this.$store.dispatch("admin/download", file.replace("storage/app/request_file", ""));
    },
  },
};
</script>

<style scoped>
.color-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
