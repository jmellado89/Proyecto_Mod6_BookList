<script setup>
import { ref } from 'vue'
import ListaLibros from '@/data/libros.json'
import { useRouter } from 'vue-router'

const datosGuardados = localStorage.getItem('mis_libros')
const libros = ref(datosGuardados ? JSON.parse(datosGuardados) : ListaLibros)

const router = useRouter()
const categorias = [... new Set(ListaLibros.map(libro => libro.categoria))]

//const libros = ref(ListaLibros)
const error = ref('')

const formNuevoLibro = ref({
    id: '',
    nombre: '',
    autor: '',
    categoria: '',
    año: null,
    resumen: '',
    stock: null,
    precio: null
})

const crearNuevoLibro = (libro) => {
    const nuevoId = libros.value.length > 0
        ? Math.max(...libros.value.map(l => l.id)) + 1
        : 1;
    libros.value.push({
        ...libro, // Copiamos los datos del formulario
        id: nuevoId,
        imagen_portada: `/covers/default.jpeg` // Evitamos que quede vacío

    });
    localStorage.setItem('mis_libros', JSON.stringify(libros.value))
    resetForm();
}

const resetForm = () => {
    formNuevoLibro.value = {
        nombre: '',
        autor: '',
        categoria: '',
        año: null,
        resumen: '',
        stock: null,
        precio: null
    };
    error.value = '';
}

const handleSubmit = () => {
    if (formNuevoLibro.value.nombre !== '' && formNuevoLibro.value.autor !== '' && formNuevoLibro.value.categoria !== '' && formNuevoLibro.value.precio > 0) {
        crearNuevoLibro(formNuevoLibro.value);
        alert("¡Libro guardado exitósamente!")
        router.replace({ name: 'Libros' })
    } else {
        error.value = 'Hay errores en el formulario. Debe contener al menos un título, autor, categoría y precio mayor a 0'
    }

}

</script>

<template>
    <div class="container">
        <h1>Agregar nuevo libro</h1>
        <form @submit.prevent="handleSubmit()">
            <div class="mb-3">
                <label for="nombre" class="form-label">Título:</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ej: UBIK"
                    v-model="formNuevoLibro.nombre">
            </div>
            <div class="mb-3">
                <label for="autor" class="form-label">Autor:</label>
                <input type="text" class="form-control" id="autor" placeholder="Ej: Phillip K Dick"
                    v-model="formNuevoLibro.autor">
            </div>
            <div class="row">
                <div class="mb-3 col">
                    <label for="categoria" class="form-label">Categoría:</label>
                    <select class="form-select" name="categoria" id="categoria" v-model="formNuevoLibro.categoria">
                        <option disabled value="">Categoría</option>
                        <option :value="categoria" v-for="categoria in categorias" :key="categoria">{{ categoria }}
                        </option>

                    </select>
                </div>
                <div class="mb-3 col">
                    <label for="año" class="form-label">Año publicación:</label>
                    <input type="number" class="form-control" id="año" placeholder="Ej: 1949"
                        v-model="formNuevoLibro.año">
                </div>
            </div>
            <div class="mb-3">
                <label for="resumen" class="form-label">Resumen:</label>
                <textarea class="form-control" id="resumen" placeholder="Ej: Un magnífico libro"
                    v-model="formNuevoLibro.resumen"></textarea>
            </div>
            <hr>
            <div class="container bg-body-secondary p-3 mb-3 row">
                <div class="mb-3 col">
                    <label for="stock" class="form-label">Stock disponible:</label>
                    <input type="number" class="form-control" id="stock" placeholder="Ej: 100"
                        v-model="formNuevoLibro.stock">
                </div>

                <div class="col">
                    <label class="form-label" for="precio">Precio</label>
                    <div class="input-group">
                        <div class="input-group-text">$</div>
                        <input type="number" class="form-control" id="precio" placeholder="Ej: 10000"
                            v-model="formNuevoLibro.precio">
                    </div>
                </div>
            </div>
            <p class="small text-danger">{{ error }}</p>

            <div class="d-grid mb-3">
                <button type="submit" class="btn btn-primary">Agregar libro</button>
            </div>
        </form>
    </div>
</template>

<style scoped></style>