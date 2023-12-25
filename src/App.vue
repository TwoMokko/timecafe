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
    import SiteTemplate from "@/components/site/SiteTemplate";
    import AdminTemplate from "@/components/admin/AdminTemplate";

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
    html {
        height: 100%;
    }
    body {
        overflow: scroll;
        overflow-x: hidden;
        height: 100%;
    }
    .body_admin {
        display: flex;
        flex-direction: column;
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
