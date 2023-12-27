export default {
    data() {
        return {
            games: [
                { id: 1, name: 'Игра 1', description: 'Описание игры 1', state: 'черновик', photo: 'pic1', people: [3, 6], time: [30, 40], age: 8, rules: 'url1' },
                { id: 2, name: 'Игра 2', description: 'Описание игры 2', state: 'неактивно', photo: 'pic2', people: [2, 4], time: [20, 40], age: 10, rules: 'url2' },
                { id: 3, name: 'Игра 3', description: 'Описание игры 3', state: 'активно', photo: 'pic3', people: [5, 6], time: [10, 20], age: 8, rules: 'url3' },
                { id: 4, name: 'Игра 4', description: 'Описание игры 4', state: 'черновик', photo: 'pic4', people: [3, 4], time: [40, 60], age: 6, rules: 'url4' },
                { id: 5, name: 'Игра 5', description: 'Описание игры 5', state: 'активно', photo: 'pic5', people: [3, 6], time: [40, 40], age: 8, rules: 'url5' },
            ],
        }
    },
   // props: {
   //      show: {
   //          type: Boolean,
   //          default: false
   //      }
   //  },
   //  methods: {
   //      hideDialog() {
   //          this.$emit('update:show', false);
   //      }
   //  },
}