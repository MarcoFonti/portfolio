<!-- JS -->
<script>

export default {
    name: 'NomeFile',

};

</script>

<!-- HTML -->
<template>
    <footer>
        <ul>
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
footer {
    position: fixed;
    bottom: 15px;
    left: 0;
    width: 100%;
}

ul {
    display: flex;
    gap: 10px;
    justify-content: end;
    list-style: none;
    padding-right: 80px;

    li {
        font-size: 30px;
    }

    .back-icon {

        transition: 0.7s ease;

        &.back-github:hover {
            color: rgb(136, 136, 136);
        }

        &.back-linkedin:hover {
            color: rgb(0, 119, 181);
        }

        &.back-facebook:hover {
            color: rgb(24, 119, 242);
        }

        &.back-instagram:hover {
            color: rgb(236, 28, 125);
        }
    }
}
</style>