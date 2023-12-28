<template>
    <router-view
        :games = "games"
    ></router-view>
</template>

<script>
    export default {
        components: {
        },
        props: {
            games: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>