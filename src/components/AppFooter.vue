<!-- JS -->
<script>

export default {
    name: 'AppFooter',

};

</script>

<!-- HTML -->
<template>
    <footer>
        <ul>
            <!-- ICONE SOCIAL -->
            <li><a class="back-icon back-github" href="https://github.com/MarcoFonti" target="_blank"><font-awesome-icon
                        :icon="['fab', 'square-github']" /></a></li>
            <li><a class="back-icon back-linkedin" href="https://www.linkedin.com/in/marcofonti99/"
                    target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
            <li><a class="back-icon back-facebook" href="https://www.facebook.com/marco.fonti.5"
                    target="_blank"><font-awesome-icon :icon="['fab', 'square-facebook']" /></a></li>
            <li><a class="back-icon back-instagram" href="https://www.instagram.com/fonti_marco_/"
                    target="_blank"><font-awesome-icon :icon="['fab', 'square-instagram']" /></a></li>
        </ul>
    </footer>
</template>

<!-- CSS -->
<style scoped lang="scss">

/* FOOTER */
footer {
    position: fixed;
    bottom: 25px;
    left: 0;
    width: 100%;
}

/* RECIPIENTE LISTA ICONE */
ul {
    display: flex;
    gap: 10px;
    justify-content: end;
    list-style: none;
    padding-right: 80px;

    /* COLORE ICONE */
    .back-github {
        --color: rgb(136, 136, 136);
    }

    .back-linkedin {
        --color: rgb(0, 119, 181);
    }

    .back-facebook {
        --color: rgb(24, 119, 242);
    }

    .back-instagram {
        --color: rgb(236, 28, 125);
    }

    /* STILE ICONE */
    .back-icon {
        font-family: inherit;
        display: flex;
        width: 2em;
        height: 2em;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        font-size: 17px;
        color: var(--color);
        border: 2px solid var(--color);
        border-radius: 6px;
        position: relative;
    }

    .back-icon::before {
        position: absolute;
        content: "";
        background: var(--color);
        width: 150px;
        height: 200px;
        z-index: -1;
        border-radius: 50%;
    }

    .back-icon:hover {
        color: white;
    }

    .back-icon:before {
        top: 100%;
        left: 100%;
        transition: 0.3s all;
    }

    .back-icon:hover::before {
        top: -30px;
        left: -30px;
    }

}
</style>