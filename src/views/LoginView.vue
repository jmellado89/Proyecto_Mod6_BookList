<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const usuario_correcto = 'admin'
const password_correcta = 'admin'

const router = useRouter()
const form = ref({
    usuario: '',
    password: ''
})

const error = ref('')

const login = () => {
    error.value = ''
    if (form.value.usuario === usuario_correcto && form.value.password === password_correcta) {
        console.log('login correcto')
        localStorage.setItem('auth_token', 'token-123456789')
        // router.push({ name: 'AgregarLibros' })
        router.replace({ name: 'AgregarLibros' })
    } else {
        error.value = 'Credenciales inválidas'
    }
}

</script>

<template>
    <main class="container p-5">
        <h3 class="lead mb-4">Para agregar un libro debes ingresar a la plataforma</h3>
        <form @submit.prevent="login">
            <div class="mb-3">
                <label class="form-label" for="usuario" id="usuario">Usuario:</label>
                <input class="form-control" type="text" v-model="form.usuario">
            </div>

            <div class="mb-5">
                <label class="form-label" for="password" id="password">Contraseña:</label>
                <input class="form-control" type="password" v-model="form.password">
            </div>
            <div v-if="error">
                <p class="small text-danger">{{ error }}</p>
            </div>
            <div class="d-grid">
                <button class="btn btn-primary" type="submit">Ingresar</button>
            </div>
        </form>
    </main>
</template>

<style scoped>
.container {
    max-width: 500px;
    margin: auto;

}

main {
    height: 100vh;
}
</style>