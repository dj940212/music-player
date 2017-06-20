<template>
  <div class="singer" ref="singer">
  	
  </div>
</template>

<script>
import {getSingerList} from 'src/api/singer'
import {ERR_OK} from 'api/config'
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
    _getSingerList() {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          console.log("歌手", res.data)
        }
      })
    }
  },
  components: {
  }
}
</script>

