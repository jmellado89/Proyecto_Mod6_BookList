<script setup>

import { Icon } from '@iconify/vue'

defineProps({
    libro: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['delete'])

const isAuthenticated = localStorage.getItem("auth_token");

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     return { name: "Login" };
//   }

//   if (to.name === "Login" && isAuthenticated) {
//     return { name: "AgregarLibros" };
//   }
// });

</script>

<template>
    <div>
        <div class="card h-100">
            <!-- <img :src="`/covers/${props.libro.id}.jpg`" class="card-img-top" alt="..."> -->
            <img :src="libro.imagen_portada" class="card-img-top" alt="portada de libro {{ libro.nombre }}">
            <div class="card-body">
                <h5 class="card-title">{{ libro.nombre }}</h5>
                <h6 class="card-subtitle">{{ libro.autor }}</h6>
                <p class="card-text">{{ libro.resumen }}</p>


            </div>
            <div class="card-footer bg-transparent border-0 d-flex justify-content-between">

                <RouterLink class="btn btn-primary" :to="{ name: 'Detalle', params: { id: libro.id } }">Ver más
                </RouterLink>

                <button v-show="isAuthenticated" class="btn btn-danger" aria-label="delete book"
                    @click="emit('delete', libro.id)">
                    <Icon icon="basil:trash-solid" width="24" height="24" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>