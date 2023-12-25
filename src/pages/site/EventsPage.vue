<template>
    <main class = "block">
        <page-name>Мероприятия</page-name>
        <event-list></event-list>
    </main>
</template>

<script>
    import PageName from "@/components/UI/PageName";
    import EventList from "@/components/site/EventList";

    export default {
        components: {
            PageName,
            EventList
        }
    }
</script>

<style scoped>

</style>