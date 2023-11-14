<template>
    <div class = "header">
        <router-link to = "/" class = "logo">LOGO</router-link>
        <div class = "menu">
            <router-link to = "/about">О нас</router-link>
            <router-link to = "/games">Игры</router-link>
            <router-link to = "/events">Мероприятия</router-link>
            <my-button>aaa</my-button>
        </div>
    </div>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    export default {
        name: 'my-header',
        components: {MyButton}
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: teal;
    }
    a:hover {
        color: white;
    }
    .header {
        display: flex;
        align-items: center;
        background-color: lightgray;
        padding: 12px 120px;
    }
    .logo {
        padding: 12px;
        cursor: pointer;
    }
    .menu {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-left: auto;
    }
</style>