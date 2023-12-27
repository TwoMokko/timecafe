<template>
    <div>
        <h1>Просмотр игры #<strong>{{ $route.params.id }}</strong></h1>
        <div class = "container">
            <div>
                <div>Название: </div>
                <div>{{ games[0].name }}</div>
            </div>
            <div>
                <div>Описание: </div>
                <div>{{ games[0].description }}</div>
            </div>
            <div>
                <div>Статус: </div>
                <div>{{ games[0].state }}</div>
            </div>
            <div>
                <div>Фото: </div>
                <div>{{ games[0].photo }}</div>
            </div>
            <div>
                <div>Наименьшее и наибольшее количество игроков: </div>
                <div>{{ games[0].people[0] }}-{{ games[0].people[1] }} чел</div>
            </div>
            <div>
                <div>Наименьшее и наибольшее время одной игры: </div>
                <div>{{ games[0].time[0] }}-{{ games[0].time[1] }} мин</div>
            </div>
            <div>
                <div>Минимальный возраст: </div>
                <div>{{ games[0].age }}+</div>
            </div>
            <div>
                <div>Ссылка на правила игры: </div>
                <div>{{ games[0].rules }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameView",
        props: {
            games: {
                type: Array,
                required: true
            }
        },
        // data() {
        //     return {
        //         arr: [
        //             { id: 1, name: 'Игра 1', description: 'Описание игры 1', state: 'черновик', photo: 'pic1', people: [3, 6], time: [30, 40], age: 8, rules: 'url1' },
        //             { id: 2, name: 'Игра 2', description: 'Описание игры 2', state: 'неактивно', photo: 'pic2', people: [2, 4], time: [20, 40], age: 10, rules: 'url2' },
        //             { id: 3, name: 'Игра 3', description: 'Описание игры 3', state: 'активно', photo: 'pic3', people: [5, 6], time: [10, 20], age: 8, rules: 'url3' },
        //             { id: 4, name: 'Игра 4', description: 'Описание игры 4', state: 'черновик', photo: 'pic4', people: [3, 4], time: [40, 60], age: 6, rules: 'url4' },
        //             { id: 5, name: 'Игра 5', description: 'Описание игры 5', state: 'активно', photo: 'pic5', people: [3, 6], time: [40, 40], age: 8, rules: 'url5' },
        //         ],
        //     }
        // },
    }
</script>

<style scoped>
    h1 {
        padding: 1.5rem 0;
        /*text-align: center;*/
    }
    .container {
        margin-bottom: 2rem;
        display: inline-block;
    }
    .container > div {
        padding-bottom: 1.2rem;
    }
    .container > div > div:first-child {
        font-weight: bold;
        padding-bottom: 0.4rem;
    }
</style>