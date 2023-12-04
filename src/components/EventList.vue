<template>
    <div class = "container">
        <event-item></event-item>
        <event-item></event-item>
        <event-item></event-item>
        <event-item></event-item>
    </div>
</template>

<script>
    import EventItem from "@/components/EventItem";

    export default {
        name: "event-list",
        components: {
            EventItem
        }
    }
</script>

<style scoped>

</style>