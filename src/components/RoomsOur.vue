<template>
    <div>
        <page-name>Наши комнаты</page-name>
        <div class = "list">
            <div
                class = "room"
                v-for = "a in arr"
                :key = "a.id"
            >
                <div class = "pic_container">
                    <div
                        v-for = "pic in a.pics"
                        :key = "pic"
                        @click="showDialog(pic)">{{ pic }}</div>
                </div>
                <div>
                    <header-text>{{ a.name }}</header-text>
                    <div>{{ a.count }}</div>
                    <div>{{ a.description }}</div>
                </div>

            </div>
        </div>
        <my-dialog v-model:show="dialogVisible">
            {{ this.picture }}
        </my-dialog>
    </div>
</template>

<script>
    import HeaderText from "@/components/UI/HeaderText";
    import MyDialog from "@/components/UI/MyDialog";
    import PageName from "@/components/UI/PageName";

    export default {
        name: "rooms-our",
        components: {
            PageName,
            MyDialog,
            HeaderText,
        },
        data() {
            return {
                arr: [
                    { id: 1, name: 'Комната 1', count: '20 чел', description: 'Много текста какого-то о комнате', pics: ['pic1', 'pic2', 'pic2', 'pic4'] },
                    { id: 2, name: 'Комната 2', count: '20 чел', description: 'Много текста какого-то о комнате', pics: ['pic1', 'pic2', 'pic2', 'pic4'] },
                    { id: 3, name: 'Комната 3', count: '20 чел', description: 'Много текста какого-то о комнате', pics: ['pic1', 'pic2', 'pic2', 'pic4'] },
                    { id: 4, name: 'Комната 4', count: '20 чел', description: 'Много текста какого-то о комнате', pics: ['pic1', 'pic2', 'pic2', 'pic4'] }
                ],
                dialogVisible: false,
                picture: ''
            }
        },
        methods: {
            showDialog(pic) {
                this.dialogVisible = true;
                this.picture = pic;

            },
        }
    }
</script>

<style scoped>
    .room {
        display: flex;
        gap: 1.5rem;
    }
    .room:not(:last-child) {
        margin-bottom: 2rem;
    }
    .pic_container {
        width: 40%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 4px;
        grid-row-gap: 4px;
    }
    .pic_container > div {
        background-color: lightgray;
        cursor: pointer;
    }
    .pic_container > div:not(:first-child) {
        height: 6rem;
    }
    .pic_container > div:first-child {
        height: 16rem;
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
    }
</style>