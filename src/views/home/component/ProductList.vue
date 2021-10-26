<template>
  <div class="product-list"  ref="wrapper" >
    <div class="nav">
      <span
      v-for="(item,index)
      in List"
      :key="index"
      :class="{active:activeIndex === index}"
      @click="dianji(index)"
    >
    {{item.title}}
  </span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ProductList',
  data () {
    return {
      activeIndex: 0
    }
  },
  props: {
    List: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.$nextTick(() => {
      console.log(this.$refs)
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        click: true
      })
    })
  },
  methods: {
    dianji (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list{
  width: 100%;
  margin-top: 15px;
  background: #f9f9f9;
  overflow: hidden;
  .nav{
    width: 150%;
    span{
      font-size: 20px;
      margin-left: 6px;
      &.active {
        color: #00a47c;
        font-weight: bold;
      }
    }
  }
}
</style>
