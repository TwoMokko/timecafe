<template>
    <main>
        <page-name class = "p">О нас</page-name>
        <about-info class = "p"></about-info>
        <about-price class = "price p"></about-price>
        <rooms-our class = "block"></rooms-our>
        <contacts-our class = "p"></contacts-our>
    </main>
</template>

<script>
    import PageName from "@/components/UI/PageName";
    import AboutPrice from "@/components/site/AboutPrice";
    import AboutInfo from "@/components/site/AboutInfo";
    import RoomsOur from "@/components/site/RoomsOur";
    import ContactsOur from "@/components/site/ContactsOur";

    export default {
        components: {
            ContactsOur,
            RoomsOur,
            AboutInfo,
            AboutPrice,
            PageName
        }
    }
</script>

<style scoped>
    .price {
        padding-bottom: 60px;
    }
</style>