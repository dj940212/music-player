<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/search">
        <span class="tab-link"><i class="icon icon-search"></i></span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user">
      <span class="tab-link"><i class="icon icon-mine"></i></span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 50px
    line-height: 50px
    font-size: $font-size-medium
    background: $color-tab-background
    .tab-item
      flex: 1
      line-height: 50px
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
        .icon
          font-size: 26px
          line-height: 50px
        .icon-mine
          font-size: 20px
      &.router-link-active
        .tab-link
          color: $color-tab-active
</style>
