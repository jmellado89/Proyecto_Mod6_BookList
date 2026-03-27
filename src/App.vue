<script setup>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';



</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />

</template>

<style scoped>
main {
  background-image: radial-gradient(circle 476px at 54.8% 51.5%, #a8e5fd 0%, rgba(244, 244, 254, 1) 42.3%, rgba(244, 244, 254, 1) 100.2%);
}
</style>
