<template>
  <table class="table">
    <thead>
      <tr>
        <th role="button" scope="col ">
          {{ $t("id") }}
        </th>
        <th scope="col ">{{ $t("centerName") }}</th>
        <th scope="col ">{{ $t("doctorName") }}</th>
        <th scope="col ">{{ $t("createdDate") }}</th>
        <th scope="col ">{{ $t("status") }}</th>

        <th scope="col ">{{ $t("change") }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="request in requests" :key="request.id">
        <th scope="row col-1">
          <nuxt-link
            class="text-capitalize btn text-dark border-0 my-2 d-block text-start font-wight"
            :to="
              localePath({
                name: 'admin-customer-request-id',
                params: {
                  id: request.id,
                },
              })
            "
          >
            {{ request.id }}</nuxt-link
          >
        </th>
        <td class="fw-500 col text-capitalize">{{ request.center_name }}</td>

        <td class="text-capitalize fw-500 col">{{ request.doctor_name }}</td>
        <td class="fw-500 col text-capitalize">{{ request.created_date }}</td>

        <td class="text-capitalize fw-500 col">
          {{ requestStatus(request.status) }}
        </td>

        <td class="d-flex flex-row align-items-center">
          <span
          v-if=" request.status !=0 && request.status!=3 "
            @click="requestId = request.id"
            data-bs-toggle="modal"
            data-bs-target="#delete-model"
            role="button"
            class="rounded-circle table-icon__circle bg-danger mx-2"
          >
            <i class="far fa-trash-alt text-white"></i>
          </span>

          <span
          v-if=" request.status !=0 && request.status!=3 "
          @click="requestId = request.id"
          role="button"
          data-bs-toggle="modal"
          data-bs-target="#update-model"
        >
          <i class="fas fa-angle-right rounded-circle table-icon__circle bg-primary text-white mx-2"></i>
        </span>

          <delete-model @delete-data="cancelRequest" />
          <update-order-model @update-request="updateRequest" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import UpdateOrderModel from '../admin/reusalbe/UpdateOrderModel.vue';
import DeleteModel from "../reusable/DeleteModel.vue";
export default {
  components: { DeleteModel, UpdateOrderModel },
  props: ["requests"],

  methods: {
    requestStatus(requestStatus) {
      if (requestStatus == 0) {
        return "Cancelled";
      } else if (requestStatus == 1) {
        return "Placed";
      } else if (requestStatus == 2) {
        return "accepted";
      } else if (requestStatus == 3) {
        return "Delivered";
      }
    },
    imagePath(path) {
      return this.$store.state.filePath + path;
    },

    updateRequest(){

      this.$emit("update-request",{id:this.requestId,action:"1"})
    },
    
    
    cancelRequest() {
      this.$emit("cancel-request", { id: this.requestId,action:"0" });
    },
  },
  data() {
    return {
      requestId: "",
    };
  },
};
</script>

<style scoped>
img {
  height: 100px;
  display: block;
}
</style>
