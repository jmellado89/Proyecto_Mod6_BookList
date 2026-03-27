<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()

const handleLogout = () => {
    localStorage.removeItem("auth_token")
    router.push({ name: 'Home' })
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg" style="background-color: #a8e5fd;" data-bs-theme="light">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" to="/">BookList 📚</RouterLink>
                <!-- <a class="navbar-brand" href="#">BookList 📚</a> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/libros">Libros</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/agregarlibro">Agregar libro</RouterLink>
                        </li>
                        <li>
                            <button type="button" class="btn btn-sm btn-secondary" @click="handleLogout">Logout</button>
                        </li>
                    </ul>
                    <!-- <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
                </div>
            </div>
        </nav>


    </div>
</template>

<style scoped></style>