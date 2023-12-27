<template>
    <div class="item">
        <div class = "picture">
            <div>
                <span>🧑 {{ game.people[0] }}-{{ game.people[1] }}</span>
                <span>⏳ {{ game.time[0] }}-{{ game.time[1] }}</span>
            </div>
        </div>
        <div class = "description">
            <header-text>{{ game.name }}</header-text>
            <div>{{ game.description }}</div>
        </div>
        <my-button
            @click="showDialog"
        >Подробнее</my-button>
        <my-dialog v-model:show="dialogVisible">
            <game-dialog
                :game = "game"
            ></game-dialog>
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
        props: {
            game: {
                type: Object,
                required: true
            }
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