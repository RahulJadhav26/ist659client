<template>
  <v-app>
    <NavBar/>
    <router-view/>
  </v-app>
</template>

<script>
import NavBarVue from './components/NavBar.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavBar: NavBarVue
  }
}
</script>
