<template>
  <div
    class="modal fade"
    id="delete-model"
    tabindex="-1"
    aria-labelledby="delete-model"
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
          <img src="../../assets/images/delete.png" alt="" />
          <h4 class="mt-3 text-capitalize text-center">
            are sure you want to delete it
          </h4>
        </div>
        <div class="modal-footer d-flex justify-content-around">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Close
          </button>
          <button
            @click="deleteData"
            type="button"
            class="btn btn-danger fw-500"
            data-bs-dismiss="modal"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
     deleteData() {
      this.$emit('delete-data')
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
