<template>
    <div>
        <h1>Создание игры</h1>
        <form>
            <div>
                <div>Название: </div>
                <input/>
            </div>
            <div>
                <div>Описание: </div>
                <textarea></textarea>
            </div>
            <div>
                <div>Статус: </div>
                <select v-model = "this.states[2].text">
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
                <input type = "number"/>
                <input type = "number"/>
            </div>
            <div>
                <div>Наименьшее и наибольшее время одной игры: </div>
                <input type = "number"/>
                <input type = "number"/>
            </div>
            <div>
                <div>Минимальный возраст: </div>
                <input type = "number"/>
            </div>
            <div>
                <div>Ссылка на правила игры: </div>
                <input/>
            </div>
            <input class = "btn" type = "submit" value = "Создать" @click = "createGame"/>
        </form>
    </div>
</template>

<script>
export default {
    name: "AdminCreate",
    data() {
        return {
            states: [
                { number: 1, text: 'активно' },
                { number: 2, text: 'неактивно' },
                { number: 3, text: 'черновик' },
                { number: 100, text: 'удалено' }
            ],
        }
    },
    methods: {
        createGame() {
            alert('Создано');
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