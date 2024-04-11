<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col -2 ">{{ $t("Name") }}</th>
        <th scope="col-8 ">{{ $t("Value") }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row col-1">address</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.location }}-
          {{ $store.state.admin.requestData.governorate }}-
          {{ $store.state.admin.requestData.landmark }}-
          {{ $store.state.admin.requestData.mobile }}-
        </td>
      </tr>

      <tr>
        <th scope="row col-1">mobile</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.mobile }}-
        
        </td>
      </tr>

      <tr>
        <th scope="row col-1">exam</th>
        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.exam }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">zircon</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.zircon }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">N_P</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.N_P }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">digital</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.digital }}
        </td>
      </tr>
      <tr>
        <th scope="row col-1">MD4</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.MD4 }}
        </td>
      </tr>



      <tr>
        <th scope="row col-1">tooth number</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.tooth_number }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">centerName</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.center_name }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">doctorName</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.doctor_name }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">patientName</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.patient_name }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">comment</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.comment }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">separated</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.separated }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">createdDate</th>

        <td class="fw-500 col text-capitalize">
          {{ $store.state.admin.requestData.created_date }}
        </td>
      </tr>

      <tr v-if="$store.state.admin.requestData.file != null">
        <th scope="row col-1">file</th>

        <td class="fw-500 col text-capitalize">
          https://admin-panel.dsdlab-iq.com/{{ $store.state.admin.requestData.file }}
        </td>
      </tr>

      <tr>
        <th scope="row col-1">left up tooth number</th>

        <td class="fw-500 col text-capitalize row">
          <div
            class="col-1"
            v-for="leftUp in $store.state.admin.leftUpTooth"
            :key="leftUp.id"
          >
            <h2>{{ leftUp.id }}</h2>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row col-1">left up tooth color</th>

        <td class="fw-500 col text-capitalize row">
          <div
            :style="{ background: changeToColor(leftUp.color) }"
            class="color-circle col-2"
            v-for="leftUp in $store.state.admin.leftUpTooth"
            :key="leftUp.id"
          >
            1-{{ leftUp.id }}
          </div>

          <div
            :style="{ background: changeToColor(leftUp.color2) }"
            class="color-circle col-2"
            v-for="leftUp in $store.state.admin.leftUpTooth"
            :key="leftUp.id"
          >
            2-{{ leftUp.id }}
          </div>

          <div
            :style="{ background: changeToColor(leftUp.color3) }"
            class="color-circle col-2"
            v-for="leftUp in $store.state.admin.leftUpTooth"
            :key="leftUp.id"
          >
            3-{{ leftUp.id }}
          </div>
        </td>
      </tr>





      <tr>
        <th scope="row col-1">left down tooth number</th>

        <td class="fw-500 col text-capitalize row">
          <div
            class="col-1"
            v-for="leftDown in $store.state.admin.leftDownTooth"
            :key="leftDown.id"
          >
            <h2>{{ leftDown.id }}</h2>
          </div>
        </td>
      </tr>


      <tr>
        <th scope="row col-1">left down tooth color</th>

        <td class="fw-500 col text-capitalize row">
          <div
            :style="{ background: changeToColor(leftDown.color) }"
            class="color-circle col-2"
            v-for="leftDown in $store.state.admin.leftDownTooth"
            :key="leftDown.id"
          >
            1-{{ leftDown.id }}
          </div>

          <div
            :style="{ background: changeToColor(leftDown.color2) }"
            class="color-circle col-2"
            v-for="leftDown in $store.state.admin.leftDownTooth"
            :key="leftDown.id"
          >
            2-{{ leftDown.id }}
          </div>

          <div
            :style="{ background: changeToColor(leftDown.color3) }"
            class="color-circle col-2"
            v-for="leftDown in $store.state.admin.leftDownTooth"
            :key="leftDown.id"
          >
            3-{{ leftDown.id }}
          </div>
        </td>
      </tr>


































      <tr>
        <th scope="row col-1">right up tooth number</th>

        <td class="fw-500 col text-capitalize row">
          <div
            class="col-1"
            v-for="rightUp in $store.state.admin.rightUpTooth"
            :key="rightUp.id"
          >
            <h2>{{ rightUp.id }}</h2>
          </div>
        </td>
      </tr>




      <tr>
        <th scope="row col-1">right up tooth color</th>

        <td class="fw-500 col text-capitalize row">
          <div
            :style="{ background: changeToColor(rightUp.color) }"
            class="color-circle col-2"
            v-for="rightUp in $store.state.admin.rightUpTooth"
            :key="rightUp.id"
          >
            1-{{ rightUp.id }}
          </div>

          <div
            :style="{ background: changeToColor(rightUp.color2) }"
            class="color-circle col-2"
            v-for="rightUp in $store.state.admin.rightUpTooth"
            :key="rightUp.id"
          >
            2-{{ rightUp.id }}
          </div>

          <div
            :style="{ background: changeToColor(rightUp.color3) }"
            class="color-circle col-2"
            v-for="rightUp in $store.state.admin.rightUpTooth"
            :key="rightUp.id"
          >
            3-{{ rightUp.id }}
          </div>
        </td>
      </tr>






  










      <tr>
        <th scope="row col-1">right down tooth number</th>

        <td class="fw-500 col text-capitalize row">
          <div
            class="col-1"
            v-for="rightDown in $store.state.admin.rightDownTooth"
            :key="rightDown.id"
          >
            <h2>{{ rightDown.id }}</h2>
          </div>
        </td>
      </tr>

      
      <tr>
        <th scope="row col-1">right down tooth color</th>

        <td class="fw-500 col text-capitalize row">
          <div
            :style="{ background: changeToColor(rightDown.color) }"
            class="color-circle col-2"
            v-for="rightDown in $store.state.admin.rightDownTooth"
            :key="rightDown.id"
          >
            1-{{ rightDown.id }}
          </div>

          <div
            :style="{ background: changeToColor(rightDown.color2) }"
            class="color-circle col-2"
            v-for="rightDown in $store.state.admin.rightDownTooth"
            :key="rightDown.id"
          >
            2-{{ rightDown.id }}
          </div>

          <div
            :style="{ background: changeToColor(rightDown.color3) }"
            class="color-circle col-2"
            v-for="rightDown in $store.state.admin.rightDownTooth"
            :key="rightDown.id"
          >
            3-{{ rightDown.id }}
          </div>
        </td>
      </tr>






    </tbody>
  </table>
</template>

<script>
export default {
  methods: {
    changeToColor(color) {
      return color.replace("0xff", "#");
    },
  },
  data() {
    return {
      projectId: "",
    };
  },
};
</script>

<style scoped>
.color-circle {
  width: 50px;
  color: white;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}
</style>
