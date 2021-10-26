<template>
  <div class="home">
    <search />
    <list :List="MenuList"/>
    <banner />
    <Menu />
    <notice />
    <card title="看一看"></card>
    <more :List="product"/>
    <photo />
    <product-list :List="List"/>
    <product-wrap :List="ProductWrap"/>
  </div>
</template>

<script>
import Search from './component/Search.vue'
import List from './component/List.vue'
import Banner from './component/Banner.vue'
import Menu from './component/Menu.vue'
import Notice from './component/Notice.vue'
import More from './component/More.vue'
import Photo from './component/Photo.vue'
import ProductList from './component/ProductList.vue'
export default {
  name: 'home',
  data () {
    return {
      MenuList: [],
      product: [],
      List: [],
      ProductWrap: []
    }
  },
  components: {
    Search,
    List,
    Banner,
    Menu,
    Notice,
    More,
    Photo,
    ProductList
  },
  created () {
    this.$axios.get('https://api.yaodouwang.com/supplier/activity/popular', {
      type: 1
    }).then((res) => {
      console.log(res)
      this.MenuList = res.data.data
    })
    this.$axios.get('https://api.yaodouwang.com/supplier/indexProduct/findStrictElection?channelCode=YAODOU', {
    }).then((res) => {
      this.product = res.data.data.products
    })
    this.$axios.get('https://api.yaodouwang.com/supplier/indexProduct/findIndexProductList?channelCode=YAODOU', {
    }).then((res) => {
      this.List = res.data.data
      console.log(this.List)
    })
    this.$axios.get('https://api.yaodouwang.com/supplier/indexProduct/findIndexProductList?channelCode=YAODOU', {
    }).then((res) => {
      this.ProductWrap = res.data.data[0].products
      console.log(this.ProductWrap)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
