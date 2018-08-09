<template>
    <div class="top_bar">
        <mt-header fixed :title="title"></mt-header>
    </div>
</template>

<script>
    export default {
        name:"TopBar",
        data() {
            return {
                title: 'Vue社区'
            }
        },
    }
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl';
.top_bar>>>.mint-header
    background $bgColor
.mint-header
    height 1.12rem
    font-size .4rem
</style>
