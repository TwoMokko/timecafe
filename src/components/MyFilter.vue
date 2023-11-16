<template>
    <div class = "filter">
        <filter-group></filter-group>
        <filter-group></filter-group>
    </div>
</template>

<script>
    import FilterGroup from "@/components/FilterGroup";
    export default {
        name: "my-filter",
        components: {
            FilterGroup
        }
    }
</script>

<style scoped>
    .filter {
        text-align: center;
    }
</style>