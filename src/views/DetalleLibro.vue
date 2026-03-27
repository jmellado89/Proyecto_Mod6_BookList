<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import librosJson from '@/data/libros.json'

const route = useRoute()
const router = useRouter()
const cantidad = ref(0)

const props = defineProps({
    id: String
})

const libro = librosJson.find(libro => libro.id == props.id)


const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});
const error = ref('')

const handleSubmit = () => {

    if (cantidad.value > 0) {
        error.value = ''
        alert("¡Libro añadido al carrito de compras!")
        console.log(cantidad);
    } else {
        error.value = 'No hay items seleccionados para agregar al carrito'
        console.log(cantidad);
    }

}

</script>

<template>
    <main class="px-5">
        <div class="p-3">
            <button class="btn btn-outline-secondary btn-sm" @click="router.back()">
                <Icon icon="basil:arrow-left-solid" width="16" height="16" /> Volver
            </button>
        </div>

        <div class="row">
            <div class="col-md-4">
                <img :src="libro.imagen_portada" alt="" class="img-fluid">
            </div>
            <div class="col-md-8">
                <h1>{{ libro.nombre }}</h1>
                <h2>{{ libro.autor }}</h2>
                <p class="small">{{ libro.año }}</p>
                <hr class="my-3">
                <span class="badge text-bg-info mb-3">{{ libro.categoria }}</span>
                <p v-if="libro.resumen_extended">{{ libro.resumen_extended }}</p>
                <p v-else>{{ libro.resumen }}</p>
                <p class="small">{{ libro.stock }} Unidades disponibles</p>
                <h3>{{ formatter.format(libro.precio) }}</h3>


                <div class="border d-inline-flex align-items-center my-3">
                    <button class="btn" @click="cantidad > 0 ? cantidad-- : cantidad">
                        <Icon icon="lucide:minus" width="20" height="20" />
                    </button>
                    <p class="lead m-0">{{ cantidad }}</p>
                    <button class="btn" @click="cantidad++">
                        <Icon icon="basil:plus-solid" width="20" height="20" />
                    </button>
                </div>
                <p class="small text-danger">{{ error }}</p>
                <form @submit.prevent="handleSubmit()">
                    <div>
                        <button type="submit" class="btn btn-success mb-3">
                            <Icon icon="lucide:shopping-cart" width="24" height="24" /> Agregar al carrito
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    background-image: radial-gradient(circle 476px at 54.8% 51.5%, #a8e5fd 0%, rgba(244, 244, 254, 1) 42.3%, rgba(244, 244, 254, 1) 100.2%);
}
</style>