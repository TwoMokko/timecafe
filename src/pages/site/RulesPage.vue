<template>
    <main class = "p">
        <page-name>Правила</page-name>
        <rules-mini></rules-mini>
        <rules-main></rules-main>
    </main>
</template>

<script>
    import PageName from "@/components/UI/PageName";
    import RulesMini from "@/components/site/RulesMini";
    import RulesMain from "@/components/site/RulesMain";

    export default {
        components: {
            PageName,
            RulesMini,
            RulesMain
        }
    }
</script>

<style scoped>

</style>