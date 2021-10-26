<template>
  <div class="search">
      <img src="https://m.yaodouwang.com/static/img/home-bg.7125719.png" alt="">
    <div class="head">
      <img src="https://images.yaodouwang.com/img/home/newSearch_icon.png" alt="">
      <input type="text" placeholder="请输入药品、症状、品牌">
    </div>
    <div class="certification_warp">
      <div class="certification_list">
        <img src="data:image/png;base64,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" alt="">
        <p>投诉电话</p>
      </div>
      <div class="certification_nav">
        <img src="data:image/png;base64,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" alt="">
        <p>企业资质</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="scss" scoped>
.search{
  width: 100%;
  display: flex;
  img{
    width: 100%;
    position: absolute;
    top: 0;
  }
  .head{
    width: 100%;
    position: relative;
    img{
      position: absolute;
      top: 32px;
      width: 15px;
      height: 15px;
      left: 33px;
    }
    input{
      border-radius: 35px;
      text-indent: 35px;
      font-size: 15px;
      width: 252px;
      background: #fff;
      border: none;
      outline: none;
      height: 38px;
      margin: 20px;
    }
  }
  .certification_warp{
    width: 180px;
    display: flex;
    .certification_list{
      display: flex;
      img {
        width: 25px;
        height: 25px;
        margin-top: 20px;
        margin-left: 15px;
      }
      p{
        font-size: 13px;
        z-index: 10;
        color: #fff;
        margin-top: 50px;
        text-align: center;
        font-weight: bold;
      }
    }
    .certification_nav{
      display: flex;
      margin-left: 10px;
      img {
        width: 25px;
        margin-left: 12px;
        height: 25px;
        margin-top: 20px;
      }
      p{
        font-size: 13px;
        font-weight: bold;
        z-index: 10;
        color: #fff;
        margin-top: 50px;
        text-align: center;
      }
    }
  }
}
</style>
