<template>
  <div class="container">
        <b-navbar toggleable="lg" type="light" >
               <router-link to="/"  class="nav-item nav-link"  tag="h5" > <b-navbar-brand href="#"><img src="https://img-premium.flaticon.com/png/512/2598/2598685.png?token=exp=1621384174~hmac=b4490409e6bffea0e2ea9fa934394bd4" style="width:4%" class="d-inline-block align-top"> Mango</b-navbar-brand></router-link>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <router-link to="/"  class="nav-item nav-link"  tag="h5" >Home</router-link>
                    <router-link to="/login"  class="nav-item nav-link"  tag="h5" >Sell</router-link>
                    <router-link to="/login"  class="nav-item nav-link"  tag="h5" >Buy</router-link>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
