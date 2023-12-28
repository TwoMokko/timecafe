<template>
    <div class = "container">
        <game-item
            v-for = "(item, id) in games"
            :key = "id"
            :game = "item"
        ></game-item>
    </div>
</template>

<script>
    import GameItem from "@/components/site/GameItem";

    export default {
        name: 'GameList',
        components: {
            GameItem
        },
        props: {
            games: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .container {
        /*padding: 0 10% 120px;*/
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>