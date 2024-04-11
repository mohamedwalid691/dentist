<template>
  <table class="table">
    <thead>
      <tr>
        <th role="button" scope="col ">
          {{ $t("id") }}
        </th>
        <th scope="col ">{{ $t("name") }}</th>
        <th scope="col ">{{ $t("email") }}</th>
        <th scope="col ">{{ $t("mobile") }}</th>
  
        <th scope="col ">{{ $t("change") }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <th scope="row col-1">{{ user.id }}</th>
        <td class="fw-500 col text-capitalize">{{ user.name }}</td>

        <td class="text-capitalize fw-500 col">{{ user.email }}</td>
        <td class="fw-500 col text-capitalize">{{ user.mobile }}</td>


        <td class="d-flex flex-row align-items-center">
     

          <span
            @click="userId = user.id"
            data-bs-toggle="modal"
            data-bs-target="#delete-model"
            role="button"
            class="rounded-circle table-icon__circle bg-danger mx-2"
          >
            <i class="far fa-trash-alt text-white"></i>
          </span>

          <delete-model @delete-data="deleteData" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import DeleteModel from "../reusable/DeleteModel.vue";
export default {
  components: { DeleteModel },
  props: ["users"],

  methods: {
  
    deleteData() {
      this.$emit("delete-data", { id: this.userId });
    },
  },
  data() {
    return {
      userId: "",
    };
  },
};
</script>

<style scoped>

</style>
