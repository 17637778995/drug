<template>
  <div class="menu">
    <div class="list">
      <ul>
        <li v-for="(item,index)
      in international"
      :key="index">
          <img :src="item.img" alt="">
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      international: [
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210727/2efb8dd1d816498386b789f83ad24195.png',
          text: '药兜国际'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/68bbc8c0a0e744068031e81dea48e32f.png',
          text: '儿童用药'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/2564a3f6053f41bc940adfe5675a53a8.png',
          text: '性福生活'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/86e9c787643b4595801612771b7e44aa.png',
          text: '维矿补益'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/45dc70de26894168976aaded6bedf0e6.png',
          text: '男科用药'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/ef5bdc5864bd4d0781ef795ab13f8868.png',
          text: '个人护理'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/6eb1a3840a184d3f8df1aa3e998e2c02.png',
          text: '妇科用药'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/cec7eefe36e44239be15fa7115ccfa5c.png',
          text: '肠胃用药'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/a1d0019552cf4171b6fc4be231131b6e.png',
          text: '皮肤用药'
        },
        {
          img: 'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201223/0211c83f8f874c528642079e6caeb066.png',
          text: '眼部护理'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  width: 100%;
  .list{
    width: 100%;
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 20%;
      margin-top: 20px;

        img{
          width: 48px;
          display: flex;
          flex-direction: column;
          height: 65px;
          margin-left: 14px;
        }
        p{
          color: #333;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
