<template>
    <div>
        <page-name>Ближайшие мероприятия</page-name>
        <div class = "list">
            <template
                v-for = "a in arr"
                :key = "a.id">
                <div
                    v-if = "a.id < 4"
                    class = "card">
                    <div class = "pic">
                        <header-text>{{ a.name }}</header-text>
                        <div>{{ a.date }}</div>
                    </div>
                </div>
            </template>
        </div>
        <div class = "btn">
            <my-button  href = "/events">Подробнее</my-button>
        </div>
    </div>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    import HeaderText from "@/components/UI/HeaderText";
    import PageName from "@/components/UI/PageName";

    export default {
        name: "EventUpcoming",
        components: {
            PageName,
            HeaderText,
            MyButton,
        },
        data() {
            return {
                arr: [
                    { id: 1, name: 'Мероприятие 1', date: '20 мая', url: 'pic1' },
                    { id: 2, name: 'Мероприятие 2', date: '23 мая', url: 'pic2' },
                    { id: 3, name: 'Мероприятие 3', date: '24 мая', url: 'pic3' },
                    { id: 4, name: 'Мероприятие 4', date: '29 мая', url: 'pic4' }
                ],
            }
        },
    }
</script>

<style scoped>
    /*.header {*/
    /*    font-size: 1.5rem;*/
    /*    text-align: center;*/
    /*    margin-bottom: 2rem;*/
    /*}*/
    .list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2%;
        margin-bottom: 1.5rem;
    }
    .card {
        /*padding: 1rem;*/
        /*border: 1px solid teal;*/
    }
    .pic {
        background-color: lightgray;
        height: 9rem;
        padding-top: 3rem;
        /*margin-bottom: 1rem;*/
        text-align: center;
    }
    .btn {
        text-align: center;
    }
</style>