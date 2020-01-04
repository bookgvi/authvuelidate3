<template>
  <b-container>
    <b-form @submit="onLogin">
      <b-row align-h="center" class="pb-3">
        <b-col cols="3">
          <label align="left" class="pb-2 w-100">
            Login:
            <b-input type="text" :value="name" @input.native="onInput($event, 'name', 'login')" :state="login"/>
            <b-form-invalid-feedback>Обязательно для заполнения</b-form-invalid-feedback>
          </label>
        </b-col>
      </b-row>
      <b-row align-h="center" class="pb-4">
        <b-col cols="3">
          <label align="left" class="pb-2 w-100">
            Password:
            <b-input type="password" :value="pass" @input.native="onInput($event, 'pass', 'password')" :state="password"/>
            <b-form-invalid-feedback>Обязательно для заполнения</b-form-invalid-feedback>
          </label>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <b-button type="submit" class="w-100">Login</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      name: '',
      login: null,
      pass: '',
      password: null
    }
  },
  methods: {
    ...mapActions([
      'authLogin'
    ]),
    async onLogin (e) {
      e.preventDefault()
      const { data, errors } = await this.authLogin({ login: this.name, password: this.pass })
      if (data) {
        const expiredAt = data.expires_at
        const token = data.access_token
        localStorage.setItem('jwt', token)
        localStorage.setItem('expiredAt', expiredAt)
        this.$router.replace('/')
      } else if (errors) {
        errors.forEach(item => { this[item.source] = false })
        console.warn('Возникли ошибки при авторизации. ')
      }
    },
    onInput (e, value, state) {
      this[value] = e.target.value
      this[state] = null
    }
  }
}
</script>

<style scoped>

</style>
