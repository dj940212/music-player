<template>
  <transition name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'src/api/singer'
  import {ERR_OK} from 'api/config'

  export default{
    computed: {
      ...mapGetters([
       'singer'
      ])
    },
    created() {
      this._getSingerDetail()
      console.log(this.singer)
    },
    methods: {
      //获取歌手详细信息
      _getSingerDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.list)
          }
        })
        console.log(ERR_OK)
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.5s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

</style>