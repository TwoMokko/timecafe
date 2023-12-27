<template>
    <my-header></my-header>
    <router-view
        :games = "games"
    ></router-view>
    <my-footer></my-footer>
</template>

<script>
    import MyHeader from "@/components/site/MyHeader";
    import MyFooter from "@/components/site/MyFooter";

    export default {
        name: "SiteTemplate",
        components: {
            MyFooter, MyHeader
        },
        props: {
            games: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>