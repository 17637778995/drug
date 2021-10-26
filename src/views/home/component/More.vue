<template>
  <div class="more" ref="wrapper">
    <div class="list" >
      <dl
      v-for="(item,index)
      in List"
      :key="index"
    >
        <dt><img :src="item.imageUrl" alt=""></dt>
        <dd>
          <p>{{item.productName}}</p>
          <span>￥{{item.price}}.00</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'More',
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
        scrollX: true
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.more{
  width: 100%;
  overflow: hidden;
  .list{
    width: 200%;
    display: flex;
    dl{
      width: 100%;
      margin-left: 10px;
      dt{
        img{
          width: 100px;
          height: 100px;
        }
      }
      dd{
        p{
          width: 100px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span{
          color: #ff8933;
          font-weight: bold;
          margin-top: 15px;
          display: block;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
