<template>
  <div class="list">
    <div class="nav">
      <router-link tag="span" to=""
        v-for="(item,index) in List"
        :key="index"
      >
      {{item.popularName}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    List: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
  width: 100%;
  .nav{
    position: absolute;
    top: 70px;
    left: 0;
    span{
      color: #fff;
      font-size: 12px;
      margin-left: 2px;
    }
  }
}
</style>
