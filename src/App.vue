<template>
    <my-header></my-header>
    <router-view></router-view>
</template>

<script>
    import MyHeader from "@/components/MyHeader";
    export default {
        components: {
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
    .block {
        padding: 0 10% 120px;
    }
    /**:focus-visible {*/
    /*    outline: none;*/
    /*}*/
</style>
