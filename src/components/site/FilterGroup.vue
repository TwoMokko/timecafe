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
        name: "FilterGroup",
        components: {},
        data() {
            return {
                // isActive: false,
                type: 'Количество игроков',
                arr: [
                    { id: 1, name: 'до 2х', isActive: false },
                    { id: 2, name: '3-4', isActive: false },
                    { id: 3, name: '4-6', isActive: false },
                    { id: 4, name: 'от 6', isActive: false }
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
        padding-bottom: 2rem;
    }
    .btns {
        display: flex;
        gap: 8px;
        justify-content: center;
    }
</style>