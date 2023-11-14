<template>
  <div class = "app">
      <my-header></my-header>
      <router-view></router-view>
  </div>
</template>

<script>
    import MyHeader from "@/components/MyHeader";
    export default {
        components: {MyHeader}
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
