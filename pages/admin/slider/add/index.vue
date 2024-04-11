<template>
  <div class="admin-content col-10 no-gutters">
    <div class="container mt-5">
      <h1 class="text-capitalize h3 text-body">
        {{ $t("add") }} {{ $t("slider") }}
      </h1>
      <div class="d-flex justify-content-center">
        <button
          @click="addSlider"
          type="button"
          class="btn btn-dark mx-5 text-capitalize"
        >
          {{ $t("publish") }}
        </button>
      </div>
      <div class="mt-4 row">
        <div class="col-8">
          <div class="h-fit border bg-white rounded shadow-sm p-3">
            <h6 class="text-capitalize">{{ $t("basicInformation") }}</h6>
            <input
              @input="selectImage"
              class="form-control"
              type="file"
              id="formFileMultiple"
            />
          </div>
          <div
            class="other-information h-fit border bg-white rounded shadow-sm p-3 mt-3"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async addSlider() {
      await this.$store.dispatch("slider/add");
    },

    selectImage(e) {
      this.$store.state.slider.image = e.target.files[0];
    },
  },

  layout: "admin",
};
</script>

<style></style>
