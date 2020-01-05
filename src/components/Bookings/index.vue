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
    <booking-dialog :data="propsForModal" />
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
      this.$bvModal.show('bookingDialog')
    }
  }
}
</script>

<style scoped>
</style>
