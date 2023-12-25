<template>
    <header>
        <router-link :to = "{ name: 'home' }" class = "logo">LOGO</router-link>
        <div class = "menu">
            <router-link :to = "{ name: 'home' }">Главная</router-link>
            <router-link :to = "{ name: 'about' }">О нас</router-link>
            <router-link :to = "{ name: 'games' }">Игры</router-link>
            <router-link :to = "{ name: 'events' }">Мероприятия</router-link>
            <router-link :to = "{ name: 'rules' }">Правила</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'MyHeader',
        components: {}
    }
</script>

<style scoped>
    a {
        color: teal;
    }
    a:hover {
        color: white;
    }
    header {
        display: flex;
        align-items: center;
        background-color: lightgray;
        padding: 1rem 10%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .logo {
        height: 2rem;
        cursor: pointer;
    }
    .menu {
        display: flex;
        align-items: center;
        margin-left: auto;
    }
    a {
        padding: 0.5rem;
    }
</style>