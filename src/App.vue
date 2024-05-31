<!-- JS -->
<script>
/* IMPORTAZIONE NAVBAR */
import NavBar from './components/NavBar.vue';

/* LINK NAVBAR */
import { HeaderLink } from './assets/data/index.js'

export default {
    name: 'NomeFile',
    data() {
        return {
            HeaderLink, // Dati da passare alla NavBar
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
/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

/* SFONFO */
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

/* COLORE BASE */
a {
    text-decoration: none;
    color: white;

    &:active {
        color: rgb(160, 159, 159);
    }
}
</style>
