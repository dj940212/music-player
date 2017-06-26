<template>
  <div class="singer" ref="singer">
    <ListView :data="singers" ref="list" @select="selectSinger"></ListView>
    <router-view></router-view>
  </div>
</template>

<script>
import { getSingerList } from 'src/api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'
import ListView from 'src/base/listview/listview'
import {mapMutations} from 'vuex'
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10

export default {
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    _getSingerList() {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list)
          console.log("歌手", this.singers)
        }
      })
    },
    _normalizeSinger(list) {
        let map = {
            hot: {
                title: HOT_NAME,
                items: []
            }
        }
        list.forEach((item, index) => {
            if (index < HOT_SINGER_LEN) {
                map.hot.items.push(new Singer({
                    name: item.Fsinger_name,
                    id: item.Fsinger_mid
                }))
            }
            const key = item.Findex
            if (!map[key]) {
                map[key] = {
                    title: key,
                    items: []
                }
            }
            map[key].items.push(new Singer({
                name: item.Fsinger_name,
                id: item.Fsinger_mid
            }))
        })

        //为了得到有序列表，我们需要处理map
        let ret = []
        let hot = []
        for (let key in map) {
            let val = map[key]
            if (val.title.match(/[a-zA-z]/)) {
                ret.push(val)
            }else if (val.title === HOT_NAME) {
                hot.push(val)
            }
        }
        ret.sort((a,b) => {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    ListView
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>