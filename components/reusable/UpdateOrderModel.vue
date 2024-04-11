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
          <img src="../../assets/images/updated.png" alt="" />
          <h4 class="mt-3 text-capitalize text-center">
            are you shire you want change request status
          </h4>

          
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
  props: {},
  methods: {
    updateItem() {
      console.log("mohamed");
      this.$emit("update-request");
    },
  },
};
</script>

<style scoped>
img {
  height: 10rem;
  display: block;
  margin: 0 auto;
}
</style>
