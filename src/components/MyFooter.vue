<template>
    <footer>
        <div class = "logo">
            <div><strong>LOGO</strong></div>
            <div>
                <div>Антикафе time cafe</div>
                <div>Мы открыты круглосуточно</div>
            </div>
        </div>
        <div class = "contact">
            <div>
                <div>☁</div>
                <div>Вконтакте</div>
            </div>
            <div>
                <div>✈</div>
                <div>Телеграм</div>
            </div>
            <div>
                <div>☎</div>
                <div>+7(922)458-22-50</div>
            </div>
        </div>
        <div class = "address">
            <div>
                <div>☀</div>
                <div>Москва, Игровой переулок, 7/4</div>
            </div>
            <div>
                <div>✉</div>
                <div>timecafe@mail.ru</div>
            </div>
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
        text-decoration: none;
        color: teal;
    }
    a:hover {
        color: white;
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
    .contact > div {
        display: flex;
        gap: 12px;
    }
    .address > div {
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