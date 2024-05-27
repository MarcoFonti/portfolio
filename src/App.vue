<!-- JS -->
<script>
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';
import { HeaderLink } from './assets/data/index.js'

export default {
    name: 'NomeFile',
    data() {
        return {
            HeaderLink
        }
    },
    components: { NavBar, AppFooter }

};

</script>

<!-- HTML -->
<template>
    <NavBar :link="HeaderLink" />
    <main>
        <RouterView />
    </main>
    <AppFooter/>
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
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.9);
}

a {
    text-decoration: none;
    color: white;

    &:active{
        color: rgb(160, 159, 159);
    }
}
</style>