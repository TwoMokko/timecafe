<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "my-button"
    }
</script>

<style scoped>
    .btn {
        padding: 10px 16px;
        background: none;
        color: teal;
        border: 1px solid teal;
        cursor: pointer;
    }
    .active {
        background-color: teal;
        color: white;
    }
    .btn:focus-visible {
        outline: none;
        background-color: teal;
        color: white;
        opacity: 0.5;
    }
    /*.btn:hover {*/
    /*    color: white;*/
    /*    border-color: white;*/
    /*}*/
</style>