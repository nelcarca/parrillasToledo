<template>
  <Layout>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/brasas.jpg" class="d-block w-100" alt="brasas">
    </div>
    <div class="carousel-item">
      <img src="../assets/parrillas2.jpg" class="d-block w-100" alt="Parrillas">
    </div>
    <div class="carousel-item">
      <img src="../assets/parrillita.jpg" class="d-block w-100" alt="Parrilas">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
    
  </Layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Layout from '@/layout/Layout.vue'

export default {
  name: 'HomeView',
  components: {
    Layout,
  }
}
</script>

<style lang="scss" scoped>
.carousel img {
    top: 0;
    left: 0;
    min-width: 100%;
    height: 550px;
    max-height: 550px;
    width: auto;
    margin-bottom: 50px;
}
</style>
