<template>
    <div class = "content">
        <header-text>{{ game.name }}</header-text>
        <div class = "picture"></div>
        <div>
            <div>🧑 {{ game.people[0] }}-{{ game.people[1] }} игроков</div>
            <div>⏳ {{ game.time[0] }}-{{ game.time[1] }} минут</div>
            <div>{{ game.age }} ✚</div>
        </div>
        <div>{{ game.description }}</div>
        <a>
            <span>♞</span>
            <span>Правила игры</span>
        </a>
    </div>
</template>

<script>

    export default {
        name: "GameDialog",
        components: {},
        props: {
            game: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .picture {
        background-color: lightgray;
        width: 100%;
        height: 150px;
        margin-bottom: 1.5rem;
    }
    .content > div:nth-child(3) {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    .content > div:nth-child(4) {
        padding-bottom: 1.5rem;
    }
    a {
        cursor: pointer;
    }
    a:hover {
        color: teal;
    }
</style>