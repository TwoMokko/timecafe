<template>
    <div class="item">
        <div class = "picture"></div>
        <div class = "description">
            <div>Название</div>
            <div>Описание какое-то игры, длинное, возможно</div>
        </div>
        <my-button>Подробнее</my-button>
    </div>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    export default {
        name: "game-item",
        components: {MyButton}
    }
</script>

<style scoped>
    .item {
        padding: 32px;
    }
    .picture {
        background-color: lightgray;
        width: 100%;
        height: 200px;
        margin-bottom: 24px;
    }
    .description > div:first-child {

    }
</style>