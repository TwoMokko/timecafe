<template>
    <my-filter></my-filter>
    <game-list class = "block"></game-list>
</template>

<script>
    import GameList from "@/components/GameList";
    import MyFilter from "@/components/MyFilter";
    export default {
        components: {MyFilter, GameList}
    }
</script>

<style scoped>

</style>