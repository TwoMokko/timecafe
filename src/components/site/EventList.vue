<template>
    <div class = "container">
        <event-item></event-item>
        <event-item></event-item>
        <event-item></event-item>
        <event-item></event-item>
    </div>
</template>

<script>
    import EventItem from "@/components/site/EventItem";

    export default {
        name: "EventList",
        components: {
            EventItem
        }
    }
</script>

<style scoped>

</style>