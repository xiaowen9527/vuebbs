<template>
    <div class="navbar" fixed>
        <mt-tabbar>
            <mt-tab-item v-for="(item,index) in footer" :key="index">
                <router-link class="item" :to="item.path" tag="a">{{item.name}}</router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
      return {
          footer: [
          {path: '/', name: '首页'},
          {path: '/message', name: '消息'},
          {path: '/about', name: '我的'}
        ]
      }
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl';
.navbar
    position fixed
    bottom 0
    left 0
    width 100%
    height .8rem
    background red
    .mint-tab-item
        background #1f2d3d
        .mint-tab-item-label
            padding 0
            .item
                line-height .8rem
                font-size .28rem
                color #ffffff
            .actClass
                color $bgColor
    


</style>
