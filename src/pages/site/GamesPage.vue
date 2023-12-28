<template>
    <main>
        <page-name>Наши игры</page-name>
        <my-filter></my-filter>
        <game-list
            class = "block"
            :games = "games"
        ></game-list>
    </main>
</template>

<script>
    import PageName from "@/components/UI/PageName";
    import GameList from "@/components/site/GameList";
    import MyFilter from "@/components/site/MyFilter";

    export default {
        components: {
            PageName,
            MyFilter,
            GameList
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

</style>