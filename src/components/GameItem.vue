<template>
    <div class="item">
        <div class = "picture"></div>
        <div class = "description">
            <header-text>Название</header-text>
            <div>Описание какое-то игры, длинное, возможно</div>
        </div>
        <my-button>Подробнее</my-button>
    </div>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    import HeaderText from "@/components/UI/HeaderText";
    export default {
        name: "game-item",
        components: {HeaderText, MyButton}
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
    .description > div:nth-of-type(1) {
        padding-bottom: 12px;
    }
    .description > div:nth-child(2) {
        padding-bottom: 24px;
    }
</style>