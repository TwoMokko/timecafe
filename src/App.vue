<template>
    <admin-template
        v-if = "$route.path.match(/\/admin\/?.*/)"
        :games = "games"
        @deleteGame = "deleteGame"
    ></admin-template>
    <div
        v-else-if = "$route.name === 'notfound'"
    ><router-view></router-view></div>
    <site-template
        v-else
        :games = "games"
    ></site-template>
</template>

<script>
    import SiteTemplate from "@/components/site/SiteTemplate";
    import AdminTemplate from "@/components/admin/AdminTemplate";

    export default {
        components: {
            AdminTemplate,
            SiteTemplate
        },
        data() {
            return {
                games: {
                    1: { name: 'Игра 1', description: 'Описание игры 1', state: 'черновик', photo: 'pic1', people: [3, 6], time: [30, 40], age: 8, rules: 'url1' },
                    2: { name: 'Игра 2', description: 'Описание игры 2', state: 'неактивно', photo: 'pic2', people: [2, 4], time: [20, 40], age: 10, rules: 'url2' },
                    3: { name: 'Игра 3', description: 'Описание игры 3', state: 'активно', photo: 'pic3', people: [5, 6], time: [10, 20], age: 8, rules: 'url3' },
                    4: { name: 'Игра 4', description: 'Описание игры 4', state: 'черновик', photo: 'pic4', people: [3, 4], time: [40, 60], age: 6, rules: 'url4' },
                    5: { name: 'Игра 5 проверка', description: 'Описание игры 5 подлиннее проверка веселое времяпрепровождение вау', state: 'активно', photo: 'pic5', people: [3, 6], time: [40, 40], age: 8, rules: 'url5' },
                },
            }
        },
        methods: {
            deleteGame(id) {
                delete this.games[id]
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        height: 100%;
    }
    body {
        overflow: scroll;
        overflow-x: hidden;
        height: 100%;
    }
    .body_admin {
        display: flex;
        flex-direction: column;
    }
    a {
        text-decoration: none;
    }
    .block {
        padding: 0 10% 60px;
    }
    .p {
        padding: 0 20%;
    }
    main {
        margin-top: 6rem;
        min-height: calc(100vh - 12rem);
    }
    *:focus-visible {
        outline: none;
        background-color: white;
        opacity: 0.5;
    }
</style>
