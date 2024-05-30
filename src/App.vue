<!-- JS -->
<script>
/* IMPORTAZIONE */
import NavBar from './components/NavBar.vue';

import { HeaderLink } from './assets/data/index.js'

export default {
    name: 'NomeFile',
    data() {
        return {
            HeaderLink,
        }
    },
    components: { NavBar }

};

</script>

<!-- HTML -->
<template>
    <!-- NAVBAR -->
    <NavBar :link="HeaderLink" />
    <main class="scrollable-content">
    <!-- CONTENUTO -->
        <RouterView />
    </main>
</template>

<!-- CSS -->
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body {
    background-image: url(./assets/img/photo-background.jpg);
    background-position: center;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-color: black;
    color: white;
    background-color: rgba(0, 0, 0, 0.9);
    font-family: 'Roboto Condensed', sans-serif;
    height: 100vh;
}

a {
    text-decoration: none;
    color: white;

    &:active {
        color: rgb(160, 159, 159);
    }
}


</style>
