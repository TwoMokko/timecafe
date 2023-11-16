<template>
    <div>
        <header-text>Количество игроков</header-text>
        <div class = "btns">
            <my-button
                v-for = "a in arr"
                :key = "a.id"
                :class="{ active: a.isActive }"
                @click="doActive(a)"
            >{{ a.name }}</my-button>
        </div>
    </div>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    import HeaderText from "@/components/UI/HeaderText";
    export default {
        name: "filter-group",
        components: {
            HeaderText,
            MyButton,
        },
        data() {
            return {
                // isActive: false,
                arr: [
                    { name: 'до 2х', id: 1, isActive: false },
                    { name: '3-4', id: 2, isActive: false },
                    { name: '4-6', id: 3, isActive: false },
                    { name: 'от 6', id: 4, isActive: false }
                ]
            }
        },
        methods: {
            doActive(a) {
                a.isActive = !a.isActive;
            }
        }
    }
</script>

<style scoped>
    .btns {
        display: flex;
        gap: 8px;
        justify-content: center;
    }
</style>