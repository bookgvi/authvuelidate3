<template>
  <b-container>
    <b-row class="pb-2">
      <b-col align="left">
        <h4>Бронирования</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          :fields="fields"
          :items="getBookings"
          selectable
          select-mode="single"
          @row-clicked="onRowClicked"
        />
      </b-col>
    </b-row>
    <booking-dialog
      v-if="isShow"
      :isShow="isShow"
      :data="propsForModal"
      @toggleModal="toggleModal"
    />
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { fields } from '@/components/Bookings/columns'
import bookingDialog from '@/components/Bookings/bookingDialog'
export default {
  name: 'index',
  components: { bookingDialog },
  data () {
    return {
      fields,
      isShow: false,
      propsForModal: {}
    }
  },
  computed: {
    ...mapGetters([
      'getBookings'
    ])
  },
  async mounted () {
    const payload = { page: this.$route.path }
    if (this.getBookings) return
    this.getAll(payload)
  },
  methods: {
    ...mapActions([
      'getAll'
    ]),
    onRowClicked (item) {
      this.propsForModal = item
      this.isShow = true
      console.log(item)
    },
    toggleModal (val) {
      this.isShow = val
    }
  }
}
</script>

<style scoped>
</style>
