<template>
    <div class = "header_txt">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "header-text"
}
</script>

<style scoped>
    .header_txt {
        font-weight: bold;
    }
</style>