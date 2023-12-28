<template>
    <a class="btn">
        <slot></slot>
    </a>
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
        display: inline-block;
    }
    .active {
        background-color: teal;
        color: white;
        opacity: 0.5;
    }
    .btn:focus-visible {
        /*outline: none;*/
        background-color: teal;
        color: white;
        opacity: 0.5;
    }
    .btn:hover {
        color: white;
        background-color: teal;
        /*opacity: 0.5;*/
    }
</style>