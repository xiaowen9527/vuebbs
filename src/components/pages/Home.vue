<template>
    <div class="home">
        <top-bar></top-bar>
        <theme-list></theme-list>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import TopBar from "../../components/common/Top";
import ThemeList from "./theme_list";
import NavBar from "../../components/common/Nav";
    export default {
        name:"Home",
        components: {
            TopBar,
            NavBar,
            ThemeList
        }
    }
</script>

<style lang="stylus" scoped>

</style>
