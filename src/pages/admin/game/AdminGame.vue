<template>
    <div>
        <h1>Список игр</h1>
        <div class = "create">
            <router-link :to="{name: 'ag-create'}">Создать</router-link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Состояние</th>
                    <th>Название</th>
                    <th colspan = "3">Управление</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for = "a in arr"
                    :key = "a.id"
                >
                    <td>{{ a.id }}</td>
                    <td>{{ a.state }}</td>
                    <td>{{ a.name }}</td>
                    <td><router-link :to="{name: 'ag-view'}">Посмотреть</router-link></td>
                    <td><router-link :to="{name: 'ag-update'}">Изменить</router-link></td>
                    <td><a @click="deleteGameId">Удалить</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "AdminGame",
        components: {},
        data() {
            return {
                arr: [
                    { id: 1, name: 'Игра 1', description: 'Описание игры 1', state: 'active', photo: 'pic1', people: '3, 6', time: '30, 40', age: 8, rules: 'url1' },
                    { id: 2, name: 'Игра 2', description: 'Описание игры 2', state: 'inactive', photo: 'pic2', people: '2, 4', time: '20, 40', age: 10, rules: 'url2' },
                    { id: 3, name: 'Игра 3', description: 'Описание игры 3', state: 'active', photo: 'pic3', people: '5, 6', time: '10, 20', age: 8, rules: 'url3' },
                    { id: 4, name: 'Игра 4', description: 'Описание игры 4', state: 'active', photo: 'pic4', people: '3, 4', time: '40, 60', age: 6, rules: 'url4' },
                    { id: 5, name: 'Игра 5', description: 'Описание игры 5', state: 'inactive', photo: 'pic5', people: '3, 6', time: '40, 40', age: 8, rules: 'url5' },
                ],
            }
        },
        methods: {
            deleteGameId() {
                alert('Вы уверены?');
            }
        }
    }
</script>

<style scoped>
    h1 {
        padding: 1.5rem 0;
        /*text-align: center;*/
    }
    .create {
        /*text-align: center;*/
        padding-bottom: 1rem;
    }
    .create > a {
        display: inline-block;
        padding: 10px 16px;
        border: 1px solid teal;
    }
    table {
        /*margin: 0 auto;*/
    }
    th {
        padding: 0.6rem;
    }
    td {
        padding: 0.6rem;
    }
    thead {
        background-color: teal;
        color: white;
    }
    a {
        color: teal;
        cursor: pointer;
    }
    tr:nth-child(even) {
        background-color: lightgray;
    }
    tr:hover {
        background-color: gray;
    }
    tr:hover > td > a {
        color: white;
    }
</style>