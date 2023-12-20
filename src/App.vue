<template>
    <admin-template
        v-if = "$route.path.match(/\/admin\/?.*/)"
    ></admin-template>
    <div
        v-else-if = "$route.name === 'notfound'"
    ><router-view></router-view></div>
    <site-template
        v-else
    ></site-template>
</template>

<script>
    import SiteTemplate from "@/components/SiteTemplate";
    import AdminTemplate from "@/components/AdminTemplate";

    export default {
        components: {
            AdminTemplate,
            SiteTemplate
        },
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
        overflow-x: hidden;
    }
    a {
        text-decoration: none;
    }
    .block {
        padding: 0 10% 60px;
    }
    .p {
        padding: 0 20%;
    }
    main {
        margin-top: 6rem;
        min-height: calc(100vh - 12rem);
    }
    *:focus-visible {
        outline: none;
        background-color: white;
        opacity: 0.5;
    }
</style>
