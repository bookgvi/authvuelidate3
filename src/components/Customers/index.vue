<template>
  <b-container>
    <b-row class="pb-2">
      <b-col align="left">
        <h4>Клиенты</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table :fields="fields" :items="getCustomers"></b-table>
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
      fields: ['fullName', 'chat']
    }
  },
  computed: {
    ...mapGetters([
      'getCustomers'
    ])
  },
  async mounted () {
    const payload = { page: this.$route.path }
    if (this.getCustomers) return
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
