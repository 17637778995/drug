<template>
  <div class="product-wrap">
    <div class="product-img">
      <dl v-for="(item,index) in List" :key="index">
        <dt><img :src="item.imageUrl" alt=""></dt>
        <dd>
          <h2>{{item.productName}}</h2>
          <a href="javascript:;">药神卡</a>
          <img src="https://images.yaodouwang.com/img/home/tag_coupon.png" alt="">
          <span>￥{{item.price}}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productWrap',
  props: {
    List: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.product-wrap{
  width: 100%;
  margin-top: 20px;
  .product-img{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    dl{
      width: 50%;
      background: #fff;
      border-radius: 7px;
      dt{
        img{
          width: 200px;
        }
      }
    }
    dd{
      vertical-align: middle;
      h2{
        font-size: 16px;
        text-align: left;
        margin-left: 20px;
        margin-top: 10px;
      }
      a{
        width: 50px;
        height: 15px;
        margin-left: 24px;
        border-radius: 4px;
        display: inline-block;
        color: #fff;
        background-color: #f70c08;
        font-size: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        margin-top: 10px;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 10px;
      }
      img{
        position: absolute;
      }
      span{
        display: block;
        color: #ff8933;
        font-weight: 500;
        margin-left: 24px;
        margin-top: 15px;
        letter-spacing: 1px;
        font-size: 20px;
      }
    }
  }
}
</style>
