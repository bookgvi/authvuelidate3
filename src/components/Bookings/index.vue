<template>
  <b-container>
    <b-row class="pb-2">
      <b-col align="left">
        <h4>Бронирования</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table :fields="fields" :items="getBookings"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { fields } from '@/components/Bookings/columns'

export default {
  name: 'index',
  data () {
    return {
      fields
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
    ])
  }
}
</script>

<style scoped>

</style>
