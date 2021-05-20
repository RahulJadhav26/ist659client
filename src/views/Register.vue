<template>
<div>
    <div class="container mt-5">
  <form @submit.prevent="register_seller" v-if="seller">
    <h2 class="text-center" style="text-decoration:underline;">Register as Seller</h2>
    <label><h5 >First name</h5></label>
    <b-form-input
    class="p-4"
    v-model="first_name"
    trim></b-form-input>
    <label><h5 class="mt-5">Last Name</h5></label>
    <b-form-input
    class="p-4"
    v-model="last_name"
    trim></b-form-input>
    <label><h5 class="mt-5">Email</h5></label>
    <b-form-input
    class="p-4"
    v-model="email"
    trim></b-form-input>
    <label><h5 class="mt-5">Password</h5></label>
    <b-form-input
    class="p-4"
    v-model="password"
    trim></b-form-input>
    <button class="mt-5 btn btn-outline-primary" type="submit">Register as Seller</button>
    <div class="mt-5">
    <router-link to="/login"><a>Click here to Login</a></router-link>
    </div>
    <div class="mt-5">
    <a @click="buyer =!buyer; seller =!seller">Click here to Switch to Buyer</a>
    </div>
  </form>
  </div>

    <div class="container mt-5">
  <form @submit.prevent="register_buyer" v-if="buyer">
    <h2 class="text-center" style="text-decoration:underline;">Register as Buyer</h2>
    <label><h5 >First name</h5></label>
    <b-form-input
    class="p-4"
    v-model="first_name"
    trim></b-form-input>
    <label><h5 class="mt-5">Last Name</h5></label>
    <b-form-input
    class="p-4"
    v-model="last_name"
    trim></b-form-input>
    <label><h5 class="mt-5">Email</h5></label>
    <b-form-input
    class="p-4"
    v-model="email"
    trim></b-form-input>
    <label><h5 class="mt-5">Password</h5></label>
    <b-form-input
    class="p-4"
    v-model="password"
    trim></b-form-input>
    <button class="mt-5 btn btn-outline-primary" type="submit">Register as Buyer </button>
    <div class="mt-5">
    <router-link to="/login"><a>Click here to Login</a></router-link>
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
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      seller: true,
      buyer: false
    }
  },
  methods: {

    async register_seller () {
      if (this.email === '' || this.password === '' || this.first_name === '' || this.last_name === '') {
        alert('Please Fill all the columns')
      } else {
        var cred = {
          seller_firstname: this.first_name,
          seller_lastname: this.last_name,
          seller_email: this.email,
          seller_password: this.password
        }
        const response = await routes.register_seller(cred)
          .then(data => {
            console.log(data.data)
            alert('You have successfully Registered ' + data.data.sellerfirstname + ' ' + data.data.sellerlastname)
            this.$router.push('/login')
            return response
          })
      }
    },
    async register_buyer () {
      if (this.email === '' || this.password === '' || this.first_name === '' || this.last_name === '') {
        alert('Please Fill all the columns')
      } else {
        var cred = {
          buyer_firstname: this.first_name,
          buyer_lastname: this.last_name,
          buyer_email: this.email,
          buyer_password: this.password
        }
        const response = await routes.register_buyer(cred)
          .then(data => {
            console.log(data.data)
            alert('You have successfully Registered ' + data.data.buyerfirstname + ' ' + data.data.buyerlastname)
            this.$router.push('/login')
            return response
          })
      }
    }

  }
}
</script>

<style scoped>

</style>
