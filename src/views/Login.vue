<template>
<div>
  <div class="container mt-5">
  <form @submit.prevent="login_seller" v-if="seller">
    <h2 class="text-center" style="text-decoration:underline;">Login as Seller</h2>
    <label><h5>Email</h5></label>
    <b-form-input
    class="p-4"
    v-model="email"
    trim></b-form-input>
    <label><h5 class="mt-5">Password</h5></label>
    <b-form-input
    class="p-4"
    type="password"
    v-model="password"
    trim></b-form-input>
    <button class="mt-5 btn btn-outline-primary" type="submit">Login as Seller</button>
    <div class="mt-5">
    <router-link to="/register"><a>Click here to Register</a></router-link>
    </div>
    <div class="mt-5">
    <a @click="buyer =!buyer; seller =!seller">Click here to Switch to Buyer</a>
    </div>
  </form>

  <form @submit.prevent="login_buyer" v-if="buyer">
    <h2 class="text-center" style="text-decoration:underline;">Login as Buyer</h2>
    <label><h5>Email</h5></label>
    <b-form-input
    class="p-4"
    v-model="email"
    trim></b-form-input>
    <label><h5 class="mt-5">Password</h5></label>
    <b-form-input
    class="p-4"
    type="password"
    v-model="password"
    trim></b-form-input>
    <button class="mt-5 btn btn-outline-primary" type="submit">Login as Buyer</button>
    <div class="mt-5">
    <router-link to="/register"><a>Click here to Register</a></router-link>
    </div>
    <div class="mt-5 ">
    <a @click="seller =!seller; buyer =!buyer">Click here to Switch to Seller</a>
    </div>
  </form>
  </div>
</div>
</template>

<script>
import routes from '../services/routes'
export default {
  data () {
    return {
      buyer: false,
      seller: true,
      email: '',
      password: ''
    }
  },
  methods: {
    async login_seller () {
      var cred = {
        seller_email: this.email,
        seller_password: this.password
      }
      const response = await routes.login_seller(cred)
        .then(data => {
          if (data.data.data) {
            this.$store.state.user.loginStatus = true
            this.$store.state.user.data = data.data.data
            this.$router.push('/sell')
          } else {
            alert('Incorrect Password or email entered')
          }
          return response
        })
    },
    async login_buyer () {
      var cred = {
        email: this.email,
        password: this.password
      }
      const response = await routes.login_buyer(cred)
        .then(data => {
          if (data.data.data) {
            this.$store.state.user.loginStatus = true
            this.$store.state.user.data = data.data.data
            this.$router.push('/buy')
          } else {
            alert('Incorrect Password or email entered')
          }
          return response
        })
    }
  }
}
</script>

<style>

</style>
