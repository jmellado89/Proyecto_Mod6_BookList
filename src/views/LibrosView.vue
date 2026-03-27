<script setup>
import { ref } from 'vue'
import datosEstaticos from '@/data/libros.json'
import Libro from '@/components/Libro.vue'

//const libros = ref(ListaLibros)
const datosGuardados = localStorage.getItem('mis_libros')
const libros = ref(datosGuardados ? JSON.parse(datosGuardados) : datosEstaticos)

const eliminarLibro = (id) => {
    libros.value = libros.value.filter(libro => libro.id !== id)
    localStorage.setItem('mis_libros', JSON.stringify(libros.value))
}



</script>

<template>
    <main>
        <div class="container">
            <h1 class="py-4 text-center">Nuestros libros disponibles</h1>
            <div class="row row-cols-md-4 row-cols-lg-5 g-4" v-if="libros.length">
                <div class="col" v-for="libro in libros" :key="libro.id">
                    <Libro :libro="libro" @delete="eliminarLibro" />
                </div>
            </div>
            <div v-else>
                <h4 class="text-danger py-5 text-center">No hay libros disponibles</h4>
            </div>
        </div>
    </main>


</template>

<style scoped>
main {
    background-image: radial-gradient(circle 476px at 54.8% 51.5%, #a8e5fd 0%, rgba(244, 244, 254, 1) 42.3%, rgba(244, 244, 254, 1) 100.2%);
}
</style>