<template>
    <div class = "list">
        <div
            v-for = "a in arr"
            :key = "a.id"
            class = "card"
        >
            <div class = "icon"></div>
            <div>
                <header-text>{{ a.name }}</header-text>
                <div class = "description">{{ a.description }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderText from "@/components/UI/HeaderText";

    export default {
        name: "EntertainmentOur",
        components: {
            HeaderText
        },
        data() {
            return {
                arr: [
                    { id: 1, name: 'Проектор для фильмов', description: 'Посмотри любимое кино вместе с друзьями', url: 'pic1' },
                    { id: 2, name: 'Музыка', description: 'Играй на гитаре, укулеле', url: 'pic2' },
                    { id: 3, name: 'Домашняя библиотека', description: 'Множество интересных книг, чтобы уютно скоротать вечер', url: 'pic3' },
                    { id: 4, name: 'Всё для работы', description: 'Принтер, зарядки, розетки и кофе', url: 'pic4' },
                    { id: 5, name: 'Игровые приставки', description: 'Playstation 5 и Playstation 4 с множеством игр', url: 'pic4' },
                    { id: 6, name: 'Настольные игры', description: 'В нашей коллекции более 500 настолок на любой вкус', url: 'pic4' },
                ],
            }
        },
    }
</script>

<style scoped>
    .list {
        padding: 0 10% 60px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;
    }
    .card {
        display: flex;
        gap: 1rem;
    }
    .description {
        font-size: 0.8rem;
        color: gray;
    }
    .icon {
        background-color: lightgray;
        width: 3rem;
        height: 3rem;
        flex: none;
    }
</style>