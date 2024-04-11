<template>
  <div
    class="modal fade"
    id="update-model"
    tabindex="-1"
    aria-labelledby="update-model"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img src="../../../assets/images/updated.png" alt="" />
          <h4 class="mt-3 text-capitalize text-center">
          {{ message }}
          </h4>

          <div class="admin-form__control mt-4 w-100">
            <label
              for="statusAr"
              class="admin-form__label mb-2 px-1 text-capitalize"
              >Status Ar</label
            >
            <input
              class="admin-form__input px-3"
              type="text"
              name="statusAr"
              id="statusAr"
              v-model="$store.state.admin.statusAr"
              placeholder="statusAr"
            />
          </div>




          <div class="admin-form__control mt-4 w-100">
            <label
              for="statusEn"
              class="admin-form__label mb-2 px-1 text-capitalize"
              >Status En</label
            >
            <input
              class="admin-form__input px-3"
              type="text"
              name="statusEn"
              id="statusEn"
              v-model="$store.state.admin.statusEn"
              placeholder="statusEn"
            />
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-around">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button
            @click="updateItem"
            type="button"
            class="btn btn-primary fw-500"
            data-bs-dismiss="modal"
          >
            update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'you are about to change order status',
    },
  },
  methods: {
    updateItem() {
      this.$emit('update-request')
    },
  },
}
</script>

<style scoped>
img {
  height: 10rem;
  display: block;
  margin: 0 auto;
}
</style>
