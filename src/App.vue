<template>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";
    export default {
        components: {
            MyFooter,
            MyHeader
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        overflow: scroll;
    }
    .block {
        padding: 0 10% 60px;
    }
    main {
        margin-top: 6rem;
        min-height: calc(100vh - 13rem);
    }
    *:focus-visible {
        outline: none;
        background-color: white;
        opacity: 0.5;
    }
</style>
