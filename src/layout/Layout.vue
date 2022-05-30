<template>
  <div class="layout">
    <!-- navbar -->
    <Navbar/>
    <div class="container mt-5">
      <!-- aqui se van renderizar todos nuestros componentes -->
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>