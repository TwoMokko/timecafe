<template>
    <div>
        <page-name>Как добраться</page-name>
        <div>Описание?</div>
        <div class = "link">
            <a href = "">Смотреть на Яндекс Картах</a>
        </div>
        <div class = "map">
            <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps">Москва</a>
            <a href="https://yandex.ru/maps/213/moscow/?ll=37.610060%2C55.720254&mode=routes&rtext=55.718819%2C37.607933~55.721364%2C37.611955&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858945~&utm_medium=mapframe&utm_source=maps&z=17.09">Яндекс</a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.610060%2C55.720254&mode=routes&rtext=55.718819%2C37.607933~55.721364%2C37.611955&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858945~&z=17.09" frameborder="1" allowfullscreen="true"></iframe>
        </div>
    </div>
</template>

<script>
    import PageName from "@/components/UI/PageName";
    export default {
        name: "contacts-our",
        components: {PageName}
    }
</script>

<style scoped>
    a {
        color: teal;
    }
    .link {
        margin-bottom: 1.5rem;
    }
    .map {
        position:relative;
        overflow:hidden;
        margin-bottom: 60px;
    }
    .map > a:nth-of-type(1) {
        color:#eee;
        font-size:12px;
        position:absolute;
        top:0;
    }
    .map > a:nth-of-type(2) {
        color:#eee;
        font-size:12px;
        position:absolute;
        top:14px;
    }
    .map > iframe {
        position:relative;
        width: 100%;
        height: 300px;
    }
</style>