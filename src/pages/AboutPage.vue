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
    import AboutPrice from "@/components/AboutPrice";
    import AboutInfo from "@/components/AboutInfo";
    import RoomsOur from "@/components/RoomsOur";
    import ContactsOur from "@/components/ContactsOur";

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