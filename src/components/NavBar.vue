<!-- JS -->
<script>

export default {
    name: 'NavBar',
    props: {
        link: Array
    }
};

</script>

<!-- HTML -->
<template>
    <header>
        <ul class="container-nav">
            <li v-for="element in link" :key="element.name">
                <RouterLink :to="{ name: element.name }" class="nav-link" active-class="active-link">
                    <span>{{ element.text }}</span>
                </RouterLink>
            </li>
        </ul>
    </header>
</template>

<!-- CSS -->
<style scoped lang="scss">

header {
    margin-top: 30px;
}

.container-nav{
    list-style: none;
    display: flex;
    gap: 25px;
    justify-content: center;
    font-size: 22px;
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