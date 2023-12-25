<template>
    <div class = "panel">
        <div class = "name">Привет, админ</div>
        <div>
            <div
                v-for = "a in arr"
                :key = "a.id"
            >
                <router-link :to = "{ name: a.link }">{{ a.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminPanel",
        data() {
            return {
                arr: [
                    { id: 1, link: 'ad-game', name: 'Игры' },
                    { id: 2, link: 'ad-room', name: 'Комнаты' },
                    // { id: 3, link: 'ad-events', name: 'Мероприятия' },
                    // { id: 4, link: 'ad-texts', name: 'Текста' }
                ],
            }
        }
    }
</script>

<style scoped>
    .panel {
        /*height: 100%;*/
        width: 180px;
        flex: none;
        /*padding: 1rem;*/
        background-color: lightgray;
    }
    .name {
       padding: 1rem;
        font-size: 1.2rem;
    }
    .panel > div:nth-of-type(2) > div {
        /*padding: 4px 1rem;*/
        /*cursor: pointer;*/
    }
    .panel > div:nth-of-type(2) > div:hover {
        background-color: gray;
    }
    a {
        display: block;
        padding: 4px 1rem;
        color: black;
    }
</style>