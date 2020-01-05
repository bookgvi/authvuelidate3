<template>
  <b-modal id="bookingDialog" header-border-variant="white" footer-border-variant="white">
    <template #modal-header="{ close }">
      <b-container>
        <b-row align-v="center">
          <b-col cols="10">
            <h4 class="mb-0 font-weight-bold">Бронь {{ data.id }}</h4>
          </b-col>
          <b-col cols="2" align="end">
            <span class="closeIcon" @click="close()">&times;</span>
          </b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
            <span>Зал</span>
          </b-col>
          <b-col align="end">
            {{ data.room.name }}
          </b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
            <span>Дата: </span>
          </b-col>
          <b-col cols="7" align="end">
            {{ data.reservedFrom }}
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <span>Цель: </span>
          </b-col>
          <b-col align="end">
            {{ data.eventType }}
          </b-col>
        </b-row>
      </b-container>
    </template>

    <template v-slot:modal-footer>
      <span> </span>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'bookingDialog',
  props: {
    data: Object,
    isShow: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style scoped>
  .closeIcon {
    cursor: pointer;
    font-size: 35px;
  }
  .closeIcon:hover {
    color: grey;
  }
</style>
