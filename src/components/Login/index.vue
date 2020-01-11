<template>
  <b-container>
    <b-form @submit="onLogin">
      <b-row align-h="center" class="pb-3">
        <b-col cols="4">
          <label align="left" class="pb-2 w-100">
            Login:
            <b-input type="text" :value="name" @input.native="onInput($event, 'name', 'login')" :state="login"/>
            <b-form-invalid-feedback>Обязательно для заполнения</b-form-invalid-feedback>
          </label>
        </b-col>
      </b-row>
      <b-row align-h="center" class="pb-4">
        <b-col cols="4">
          <label align="left" class="pb-2 w-100">
            Password:
            <b-input type="password" :value="pass" @input.native="onInput($event, 'pass', 'password')" :state="password"/>
            <b-form-invalid-feedback>Обязательно для заполнения</b-form-invalid-feedback>
          </label>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="4">
          <b-button type="submit" variant="primary" class="w-100">Login</b-button>
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
      password: null,
      alert: {
        title: '',
        variant: 'info'
      }
    }
  },
  methods: {
    ...mapActions([
      '__http'
    ]),
    async onLogin (e) {
      e.preventDefault()
      const login = {
        login: this.name,
        password: this.pass
      }
      const url = 'https://pre.ugoloc.ucann.ru/api/auth/login'
      const res = await this.__http({ payload: login, method: 'POST', url })
      const { data, errors } = res
      if (data) {
        const expiredAt = data.expires_at
        const token = data.access_token
        localStorage.setItem('jwt', token)
        localStorage.setItem('expiredAt', expiredAt)
        this.$router.replace('/')
      } else if (errors) {
        this.alert.variant = 'warning'
        if ([404, 401, 403].indexOf(res.status) !== -1) {
          this.alert.variant = 'danger'
        }
        errors.forEach(item => {
          this[item.source] = false
          this.alert.title = item.title
          this.$bvToast.toast(`${this.alert.title}`, {
            appendToast: true,
            autoHideDelay: 4000,
            title: 'Предупреждение',
            variant: this.alert.variant
          })
        })
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
