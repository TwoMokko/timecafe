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
        <about-price></about-price>
    </div>
</template>

<script>
    // import HeaderText from "@/components/UI/HeaderText";
    import AboutPrice from "@/components/site/AboutPrice";

    export default {
        name: "RulesMini",
        components: {
            AboutPrice,
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
    .list > div:not(:last-child) {
        display: flex;
        gap: 0.5rem;
        padding-bottom: 0.5rem;
    }
    .list > div:last-child {
        padding-top: 1rem;
    }
    .symbol {
        color: teal;
    }
</style>