<template>
<!--        <header-text>Общие правила</header-text>-->
    <div class = "list">
        <div
            v-for = "a in arr"
            :key = "a.id"
        >
            <div class = "symbol">✦</div>
            <div>{{ a.text }}</div>
        </div>
    </div>
</template>

<script>
    // import HeaderText from "@/components/UI/HeaderText";

    export default {
        name: "rules-mini",
        components: {
            // HeaderText
        },
        data() {
            return {
                arr: [
                    { id: 1, text: 'Снимайте верхнюю одежду и обувь, мы ходим в тапочках или одноразовых носочках' },
                    { id: 2, text: 'Убирайте грязную посуду в раковину, кладите вещи на место' },
                    { id: 3, text: 'Уважительно относитесь к другим гостям' },
                    { id: 4, text: 'Не материтесь на территории клуба' },
                    { id: 5, text: 'На территории клуба запрещены алкоголь, наркотики, курение, азартные игры, секс' },
                ]
            }
        },
    }
</script>

<style scoped>
    .list {
        border: 1px solid teal;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }
    .list > div {
        display: flex;
        gap: 0.5rem;
        padding-bottom: 0.5rem;
    }
    .symbol {
        color: teal;
    }
</style>