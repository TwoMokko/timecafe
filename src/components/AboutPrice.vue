<template>
    <div>
        Работаем круглосуточно
        <br>
        <br>Первые два часа — 3₽ в минуту
        <br>Далее — по 2₽ в минуту
        <br>Стопчек* 690₽
        <br>Стопчек* для студентов 490₽

        <div class = "stop">*Сумма, больше которой вы не заплатите, находясь в заведении в течение одной рабочей смены (рабочая смена начинается в 9.00 и заканчивается в 8.59 следующего дня)</div>
    </div>
</template>

<script>
    export default {
        name: "about-price"
    }
</script>

<style scoped>
    .stop {
        padding-top: 2rem;
        font-size: 0.8rem;
        max-width: 50%;
    }
</style>