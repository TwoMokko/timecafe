<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "page-name"
    }
</script>

<style scoped>
    div {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
    }
</style>