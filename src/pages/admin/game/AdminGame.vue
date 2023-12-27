<template>
    <div>
        <h1>Список игр</h1>
        <div class = "create">
            <router-link :to="{ name: 'ag-create' }">Создать</router-link>
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
                    v-for = "game in games"
                    :key = "game.id"
                >
                    <td>{{ game.id }}</td>
                    <td>{{ game.state }}</td>
                    <td>{{ game.name }}</td>
                    <td><router-link :to="{ name: 'ag-view', params: { id: game.id } }">Посмотреть</router-link></td>
                    <td><router-link :to="{ name: 'ag-update', params: { id: game.id } }">Изменить</router-link></td>
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
        props: {
            games: {
                type: Array,
                required: true
            }
        },
        data() {
            return {

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