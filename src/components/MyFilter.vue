<template>
    <div>
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
</style>