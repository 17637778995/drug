<template>
  <div class="photo">
    <div class="photo-list">
      <div class="top">
        <img class="one" src="https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210610/e95a828fbd04499b913fe46f544af5eb.png" alt="">
        <img class="two" src="https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210610/4540740935d24c85a0579d7e016967bc.png" alt="">
      </div>
      <div class="bottom">
        <img class="first" src="https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210802/23f9495654e24ad2b8f3ea5fff688945.png" alt="">
        <img class="second" src="https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210610/80f6e0984c5d415681016f29cf221a1e.png" alt="">
        <img class="three" src="https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210610/d4d9051cb2fe47fa8a5491642a7e0076.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.photo{
  width: 100%;
  margin-top: 30px;
  .photo-list{
    width: 100%;
    .top{
      width: 100%;
      display: flex;
      .one{
        margin-left: 20px;
        width: 130px;
        border-radius: 3px;
      }
      .two{
        margin-left: 6px;
        width: 240px;
        border-radius: 3px;
      }
    }
    .bottom{
      width: 100%;
      margin-top: 6px;
      display: flex;
      .first{
        margin-left: 20px;
        border-radius: 3px;
        width: 130px;
      }
      .second{
        width: 118px;
        margin-left: 6px;
        border-radius: 3px;
      }
      .three{
        width: 118px;
        margin-left: 6px;
        border-radius: 3px;
      }
    }
  }
}
</style>
