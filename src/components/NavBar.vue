<!-- JS -->
<script>

export default {
    name: 'NavBar',

    data() {
        return {
            scrollposition: null
        }
    },

    props: {
        link: Array, // Prop che riceve da app.vue
    },

    methods: {
        /* FUINZIONE PER CONTROLLORARE QUANTO SCROLL VERTICALE E' STATO FATTO */
        updatescroll() {
            this.scrollposition = window.scrollY
        }
    },

    /* UTILIZZO IL METODO MOUNT PER AGGIUNGERE UN EVENTO ALLA SCROLL DELLA FINESTRA DEL BROWSER */
    mounted() {
        window.addEventListener('scroll', this.updatescroll);
    }

};

</script>

<!-- HTML -->
<template>
    <!-- HEADER -->
    <header :class="{ change_color: scrollposition > 100 }">
        <ul class="container-nav">
            <li v-for="element in link" :key="element.name">
                <!-- LINK ALLE PAGINE -->
                <RouterLink :to="{ name: element.name }" class="nav-link" active-class="active-link">
                    <span>{{ element.text }}</span>
                </RouterLink>
            </li>
        </ul>
    </header>
</template>

<!-- CSS -->
<style scoped lang="scss">
/* HEADER */
header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1;
    height: 90px;

    /* COLORE ALLA CLASSE DINAMICA DOPO LO SCROLL */
    &.change_color {
        border: 2px solid rgba(255, 255, 255, 0.18);
        background-color: rgba(28, 27, 27, 0.837);
        box-shadow: 0px 0px 15px rgba(232, 232, 237, 0.37);
        transition: 0.5s linear;
    }
}

/* CONTENITORE LINK */
.container-nav {
    list-style: none;
    display: flex;
    gap: 25px;
    font-size: 20px;

    .nav-link {
        text-decoration: none;
        color: inherit;
    }

    .active-link {
        border-bottom: 2px double white;
        padding-bottom: 5px;
    }
}
</style>