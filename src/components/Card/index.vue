<template>
  <div class="card">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  width: 100%;
  h2{
    margin: 20px;
    font-size: 20px;
  }
}
</style>
