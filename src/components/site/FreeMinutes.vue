<template>
    <div class = "free">
        <div>Следи за новостями и участвуй в розыгрышах бесплатных минут в Telegram-канале</div>
        <div class = "btn_container"><my-button>Подписаться</my-button></div>
    </div>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";

    export default {
        name: "FreeMinutes",
        components: {
            MyButton
        }
    }
</script>

<style scoped>
    .free {
        margin: 60px 0;
        display: flex;
        align-items: center;
        background-color: lightgray;
        padding: 1.5rem;
    }
    .free > div:first-child {
        flex: auto;
    }
    .btn_container {
        text-align: end;
        width: 300px;
        flex: none;
    }
</style>