<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>

</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header'

  const ERR_OK = 0
  export default {
    data () {
      return {
        seller: {}
      }
    },
    test () {

    },
    created () {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.seller = response.data
          // console.log(this.seller)
        }
      }, (response) => {
      })
    },
    components: {
      'v-header': header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl" //为什么这里可以使用绝对路径
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, .2))
    .tab-item
      flex: 1
      text-align: center
</style>
