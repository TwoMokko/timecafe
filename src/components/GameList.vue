<template>
    <div class = "container">
        <game-item></game-item>
        <game-item></game-item>
        <game-item></game-item>
        <game-item></game-item>
    </div>
</template>

<script>
    import GameItem from "@/components/GameItem";

    export default {
        components: {
            GameItem
        },
        // props: {
        //     games: {
        //         type: Array,
        //         required: true
        //     }
        // }
    }
</script>

<style scoped>
    .container {
        /*padding: 0 10% 120px;*/
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>