<template>
    <div class = "filter">
        <header-text>{{ type }}</header-text>
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
    export default {
        name: "filter-group",
        components: {},
        data() {
            return {
                // isActive: false,
                type: 'Количество игроков',
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
    .filter {
        text-align: center;
        padding: 1rem 0;
    }
    .btns {
        display: flex;
        gap: 8px;
        justify-content: center;
    }
</style>