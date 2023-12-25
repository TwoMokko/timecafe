<template>
    <div class="item"
         @click="showDescription"
    >
        <div class = "picture"></div>
        <div class = "main_info">
            <div>Подзаголовок</div>
            <header-text>Сложная игротека</header-text>
            <div>
                <div>Среда, 18:30</div>
                <div>15 июля</div>
            </div>
        </div>
        <div class = "description" :style="styleObject">
            Игротека для тех, кто любит посложнее
            <br>Каждый понедельник, в 19:00
            <br>
            <br>Если вас не пугают сложные правила и вы обожаете играть в настолки с увлекательным сценарием, сюжетными поворотами, в настолки, похожими на живые квесты в реальном времени, то каждый понедельник мы ждём вас на игротеку, где будем играть в сложные, но такие интересные настолки. «Агентство «Время», «Ужас Аркхэма», «Орлеан» и другие настолки, на которые ты всё никак не можешь собрать друзей. :)
            <br>
            <br>Оплата по тарифу антикафе.
        </div>
    </div>
</template>

<script>
    import HeaderText from "@/components/UI/HeaderText";

    export default {
        name: "EventItem",
        components: {
            HeaderText
        },
        data() {
            return {
                styleObject: {
                    '-webkit-line-clamp': '12'
                }
            }
        },
        methods: {
            showDescription() {
                this.styleObject["-webkit-line-clamp"] = (this.styleObject["-webkit-line-clamp"] === '12') ? 'revert' : '12';
            }
        }
    }
</script>

<style scoped>
    .item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 1.5rem;
        padding: 1rem;
        border: 1px solid teal;
        grid-column-gap: 1rem;
        cursor: pointer;
    }
    .picture {
        background-color: lightgray;
        min-height: 13rem;
        margin: 0 0 auto;
    }
    .main_info {
        margin: 4.3rem auto auto;
    }
    .main_info > div:nth-child(2) {
        font-size: 1.5rem;
    }
    .description {
        margin: auto;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>