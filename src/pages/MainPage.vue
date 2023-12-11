<template>
    <main class = "block">
        <page-name>Time Cafe</page-name>
        <div class = "about">
            Уютное антикафе в Москве 24/7
            <br>Плати только за время, всё остальное — бесплатно!
        </div>
        <entertainment-our></entertainment-our>
        <event-upcoming></event-upcoming>
        <free-minutes></free-minutes>
        <about-price></about-price>
    </main>
</template>

<script>
    import PageName from "@/components/UI/PageName";
    import EventUpcoming from "@/components/EventUpcoming";
    import EntertainmentOur from "@/components/EntertainmentOur";
    import FreeMinutes from "@/components/FreeMinutes";
    import AboutPrice from "@/components/AboutPrice";

    export default {
        components: {
            AboutPrice,
            FreeMinutes,
            EntertainmentOur,
            EventUpcoming,
            PageName
        },
    }
</script>

<style scoped>
    .about {
        text-align: center;
        margin-bottom: 60px;
    }
</style>