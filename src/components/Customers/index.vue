<template>
  <b-container>
    <b-row class="pb-2">
      <b-col align="left">
        <h4>Клиенты</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table :items="getCustomers"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      items: [
        { num: 1, name: 'Ivan', lastName: 'Ivanov' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getCustomers'
    ])
  },
  async mounted () {
    const payload = { page: this.$route.path }
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
