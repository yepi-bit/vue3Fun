<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" @change="onChange" :initial-swipe="initial">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
    </van-swipe>
    <el-button @click="hanleClick(0)">数据1</el-button>
    <el-button @click="hanleClick(1)">数据2</el-button>
  </div>
</template>

<script>

export default {
  name: "swiper",
  data() {
    return {
      initial: 2
    }
  },
  methods: {
    onChange(index) {
      console.log(index)
    },
    hanleClick(type) {
      console.log(type, '点击')
      if(type == 1) {
        this.initial = type
      }
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
