<script setup>

</script>

<template>
    <main>
        <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">Revisa los mejores libros en <span
                        class="text-body-secondary">BookList 📚</span></h2>
                <hr>
                <p class="lead fw-normal">¡CONOCE EL MÁS VENDIDO DE LA SEMANA!</p>
                <p class="lead">Mastering Vue.js: The Ultimate Guide to Modern Frontend Power.<br> Iván Verdugo nos
                    ayuda a navegar el mundo del desarrollo Frontend para convertirnos en los mejores desarrolladores
                    del mundo mundial.</p>

                <RouterLink class="btn btn-primary" :to="{ name: 'Libros' }">Ver catálogo de libros
                </RouterLink>
            </div>
            <div class="col-md-5 order-md-1">
                <img class="img" src="/public/covers/special.png" height="500px" alt="">
            </div>
        </div>
    </main>
</template>

<style scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

main {
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: rgb(var(--bs-tertiary-color-rgb));
    background-image: radial-gradient(circle 476px at 54.8% 51.5%, #a8e5fd 0%, rgba(244, 244, 254, 1) 42.3%, rgba(244, 244, 254, 1) 100.2%);
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
    margin-bottom: 4rem;
}

/* Since positioning the image, we need to help out the caption */
.carousel-caption {
    bottom: 3rem;
    z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
    height: 32rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
}

/* rtl:begin:ignore */
.marketing .col-lg-4 p {
    margin-right: .75rem;
    margin-left: .75rem;
}

/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
    margin: 5rem 0;
    /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
    letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {

    /* Bump up size of carousel content */
    .carousel-caption p {
        margin-bottom: 1.25rem;
        font-size: 1.25rem;
        line-height: 1.4;
    }

    .featurette-heading {
        font-size: 50px;
    }
}

@media (min-width: 62em) {
    .featurette-heading {
        margin-top: 7rem;
    }
}
</style>