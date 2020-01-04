<template>
  <b-modal v-model="isShowVM" header-border-variant="white" footer-border-variant="white">
    <template #modal-header="{ close }" class="pr-0 mr-0">
      <b-row align-h="between" align-v="center" class="w-100">
        <b-col cols="11">
          <span>Номер бронирования: {{ data.id }}</span>
        </b-col>
        <b-col cols="1" align="end" class="pr-0">
          <span class="closeIcon" @click="close()">&times;</span>
        </b-col>
      </b-row>
    </template>
    Зал: {{ data.room.name }}
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
  },
  computed: {
    isShowVM: {
      get () {
        return this.isShow
      },
      set (val) {
        this.$emit('toggleModal', val)
      }
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
