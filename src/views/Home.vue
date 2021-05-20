<template>
  <div>
      <div class="container ">
        <b-jumbotron>
          <template #header>Welcome to our Book Re-selling Market</template>

          <template #lead>
            This is a simple portal, Where students can list and Buy books from other students at refurbished rates.
          </template>
          <hr class="my-4">
          <!-- <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
          </p> -->

           <router-link to="/login"><b-button variant="primary" class="mr-2" >Buy Books</b-button></router-link>
          <router-link to="/login"><b-button variant="success" >List a Book </b-button></router-link>
        </b-jumbotron>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
  }
}
</script>
<style scoped>
.jumbotron{
  background-color:#fd8e32  ! important;
  border-radius:1.2rem;
  margin-top:100px;
}
</style>
