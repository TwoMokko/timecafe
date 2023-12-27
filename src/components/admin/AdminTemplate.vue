<template>
    <div class = "admin">
        <admin-panel></admin-panel>
        <router-view
            :games = "games"
        ></router-view>
    </div>
</template>

<script>
    import AdminPanel from "@/components/admin/AdminPanel";
    
    export default {
        name: "AdminTemplate",
        components: {
            AdminPanel
        },
        mounted() {
            document.body.classList.add('body_admin')
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
    .admin {
        display: flex;
        flex: auto;
        /*height: 100%;*/
    }
    .admin > div:nth-of-type(2) {
        /*margin: 0 auto;*/
        margin-left: 2rem;
        flex: auto;
        height: 100%;
    }
</style>