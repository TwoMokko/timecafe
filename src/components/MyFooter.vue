<template>
    <footer>
        <div class = "logo">
            <router-link to = "/" class = "logo">LOGO</router-link>
            <div>
                <div>Антикафе time cafe</div>
                <div>Мы открыты круглосуточно</div>
            </div>
        </div>
        <div class = "contact">
            <a>
                <div>☁</div>
                <div>Вконтакте</div>
            </a>
            <a>
                <div>✈</div>
                <div>Телеграм</div>
            </a>
            <a>
                <div>☎</div>
                <div>+7(922)458-22-50</div>
            </a>
        </div>
        <div class = "address">
            <a>
                <div>☀</div>
                <div>Москва, Игровой переулок, 7/4</div>
            </a>
            <a>
                <div>✉</div>
                <div>timecafe@mail.ru</div>
            </a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style scoped>
    a {
        color: black;
        cursor: pointer;
    }
    a:hover {
        color: teal;
    }
    footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        background-color: lightgray;
        padding: 1rem 10%;
    }
    .logo {
        display: flex;
        gap: 12px;
        align-items: center;
    }
    .contact > a {
        display: flex;
        gap: 12px;
    }
    .address > a {
        display: flex;
        gap: 12px;
    }
    .contact {
        margin: auto;
    }
    .address {
        margin: 0 0 0 auto;
    }
</style>