<template>
    <div>
        <h1>Редактирование игры #<strong>{{ $route.params.id }}</strong></h1>
        <form>
            <div>
                <div>Название: </div>
                <input v-model = "$props.games[$route.params.id].name"/>
            </div>
            <div>
                <div>Описание: </div>
                <textarea v-model = "$props.games[$route.params.id].description"></textarea>
            </div>
            <div>
                <div>Статус: </div>
                <select v-model = "$props.games[$route.params.id]['state']">
                    <option
                        v-for = "a in states"
                        :key = "a"
                    >{{ a.text }}</option>
                </select>
            </div>
            <div>
                <div>Фото: </div>
                <input type="file"/>
            </div>
            <div>
                <div>Наименьшее и наибольшее количество игроков: </div>
                <input type = "number" v-model = "$props.games[$route.params.id].people[0]"/>
                <input type = "number" v-model = "$props.games[$route.params.id].people[1]"/>
            </div>
            <div>
                <div>Наименьшее и наибольшее время одной игры: </div>
                <input type = "number" v-model = "$props.games[$route.params.id].time[0]"/>
                <input type = "number" v-model = "$props.games[$route.params.id].time[1]"/>
            </div>
            <div>
                <div>Минимальный возраст: </div>
                <input type = "number" v-model = "$props.games[$route.params.id].age"/>
            </div>
            <div>
                <div>Ссылка на правила игры: </div>
                <input v-model = "$props.games[$route.params.id].rules"/>
            </div>
            <input class = "btn" type = "submit" value = "Изменить" @click = "updateGame"/>
        </form>
    </div>
</template>

<script>
// import { useRoute } from 'vue-router';
// const route = useRoute();
// const id = route.params.id;

export default {
    name: "AdminUpdate",
    props: {
        games: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // arr: [
            //     { id: 1, name: 'Игра 1', description: 'Описание игры 1', state: 'черновик', photo: 'pic1', people: [3, 6], time: [30, 40], age: 8, rules: 'url1' },
            //     { id: 2, name: 'Игра 2', description: 'Описание игры 2', state: 'неактивно', photo: 'pic2', people: [2, 4], time: [20, 40], age: 10, rules: 'url2' },
            //     { id: 3, name: 'Игра 3', description: 'Описание игры 3', state: 'активно', photo: 'pic3', people: [5, 6], time: [10, 20], age: 8, rules: 'url3' },
            //     { id: 4, name: 'Игра 4', description: 'Описание игры 4', state: 'черновик', photo: 'pic4', people: [3, 4], time: [40, 60], age: 6, rules: 'url4' },
            //     { id: 5, name: 'Игра 5', description: 'Описание игры 5', state: 'активно', photo: 'pic5', people: [3, 6], time: [40, 40], age: 8, rules: 'url5' },
            // ],
            states: [
                { number: 1, text: 'активно' },
                { number: 2, text: 'неактивно' },
                { number: 3, text: 'черновик' },
                { number: 100, text: 'удалено' }
            ],
            // id: route.params.id
        }
    },
    methods: {
        updateGame() {
            alert('Изменить?');
        }
    }
}
</script>

<style scoped>
    h1 {
        padding: 1.5rem 0;
        /*text-align: center;*/
    }
    form {
        margin-bottom: 2rem;
        display: inline-block;
    }
    form > div {
        padding-bottom: 1.2rem;
    }
    form > div > div:first-child {
        font-weight: bold;
        padding-bottom: 0.4rem;
    }
    .btn {
        padding: 10px 16px;
        background: none;
        color: teal;
        border: 1px solid teal;
        cursor: pointer;
        display: inline-block;
    }
</style>