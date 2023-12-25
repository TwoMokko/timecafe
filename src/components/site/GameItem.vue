<template>
    <div class="item">
        <div class = "picture">
            <div>
                <span>🧑 2-5</span>
                <span>⏳ 30-60</span>
            </div>
        </div>
        <div class = "description">
            <header-text>Название</header-text>
            <div>Настоящий железнодорожный магнат всегда должен стремиться не только к созданию и укреплению своей империи, но и заботиться о конкурентах. Необходимо прокладывать самые длинные и самые эффективные маршруты, не забывая отсекать оппонентов от важных транспортных узлов. Главное – сохранить баланс между жадностью и умеренностью: долгие утомительные переезды конечно приносят прибыль, но за быстрое прибытие в желанный пункт назначения многие готовы серьезно раскошелиться…</div>
        </div>
        <my-button
            @click="showDialog"
        >Подробнее</my-button>
        <my-dialog v-model:show="dialogVisible">
            <game-dialog></game-dialog>
        </my-dialog>
    </div>
</template>

<script>
    import GameDialog from "@/components/site/GameDialog";
    export default {
        name: "GameItem",
        components: {
            GameDialog,
        },
        data() {
            return {
                dialogVisible: false
            }
        },
        methods: {
            showDialog() {
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>
    .item {
        padding: 32px;
    }
    .picture {
        background-color: lightgray;
        width: 100%;
        height: 200px;
        margin-bottom: 1.5rem;

        /*display: flex;*/
        /*justify-content: end;*/
        /*align-items: end;*/
    }
    .picture > div {
        /*width: 100%;*/
        height: 100%;
        display: flex;
        justify-content: end;
        align-items: end;
        /*text-align: end;*/
    }
    .picture > div > span {
        margin: 0 1rem 0.6rem 0;
    }
    .description > div:nth-of-type(1) {
        /*padding-bottom: 12px;*/
    }
    .description > div:nth-child(2) {
        margin-bottom: 1.5rem;
        overflow: hidden;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>