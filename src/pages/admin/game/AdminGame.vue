<template>
    <div>
        <h1>Список игр</h1>
        <div class = "create">
            <my-button @click = "$router.push({ name: 'ag-create' })">Создать</my-button>
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
                    v-for = "(game, id) in games"
                    :key = "id"
                >
                    <td>{{ id }}</td>
                    <td>{{ game['state'] }}</td>
                    <td>{{ game['name'] }}</td>
                    <td><router-link :to="{ name: 'ag-view', params: { id: id } }">Посмотреть</router-link></td>
                    <td><router-link :to="{ name: 'ag-update', params: { id: id } }">Изменить</router-link></td>
                    <td><a @click="showDialogDelete(id)">Удалить</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <my-dialog v-model:show="dialogVisible">
            <div class = "dialog">
                <div>Точно удалить?</div>
                <div>
                    <my-button @click="deleteGame">Да</my-button>
                    <my-button @click = "cancelDelete">Передумал</my-button>
                </div>
            </div>
        </my-dialog>
    </div>
</template>

<script>
    // import MyDialog from "@/components/UI/MyDialog";
    // import MyButton from "@/components/UI/MyButton";
    import MyButton from "@/components/UI/MyButton";
    export default {
        name: "AdminGame",
        components: {
            MyButton
            // MyButton,
            // MyDialog,
        },
        props: {
            games: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                dialogVisible: false,
                id: ''
            }
        },
        methods: {
            showDialogDelete(id) {
                this.id = id
                this.dialogVisible = true
            },
            deleteGame() {
                this.dialogVisible = false
                this.$emit('deleteGame', this.id)
            },
            cancelDelete() {
                this.dialogVisible = false
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
    .dialog {
        text-align: center;
    }
    .dialog > div:first-child {
        padding-bottom: 1.5rem;
    }
    .dialog > div:last-child > a:first-child {
        margin-right: 0.6rem;
    }
</style>