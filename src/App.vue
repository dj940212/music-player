<template>
  <div id="app" @touchmove.prevent>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import Player from 'components/player/player'
  import Tab from 'components/tab/tab'
  export default {
    components: {
      Tab,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
