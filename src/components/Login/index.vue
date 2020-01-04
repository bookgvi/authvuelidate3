<template>
  <b-form @submit="onLogin">
    <b-row class="pb-4">
      <b-col>
        <label class="pb-2">
          Login:
          <b-input type="text" v-model="name"></b-input>
        </label>
      </b-col>
    </b-row>
    <b-row class="pb-4">
      <b-col>
        <label class="pb-2">
          Password:
          <b-input type="password" v-model="pass"></b-input>
        </label>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button type="submit">Login</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      name: '',
      pass: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    async onLogin (e) {
      e.preventDefault()
      const { data, errors } = await this.login({ login: this.name, password: this.pass })
      if (data) {
        console.log(data)
        const token = data.access_token
        localStorage.setItem('jwt', token)
      } else if (errors) {
        console.warn('Возникли ошибки при авторизации', errors)
      }
    }
  }
}
</script>

<style scoped>

</style>
