<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" @change="onChange" :initial-swipe="initial">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
    </van-swipe>
    <el-button @click="hanleClick(0)">数据1</el-button>
    <el-button @click="hanleClick(1)">数据2</el-button>
    <div v-if="arr1 == '草稿' || arr2 == !'发布'">1</div>
    <div v-if="arr2 !== '哈哈' || arr2 == '发布'">2</div>
    <div v-if="arr3 == !'归档' && arr3 == '执行'">3</div>
    <!--    // && 与-->

    <h2>{{ words }}</h2>
    <h1>正确格式s：{{ s }}</h1>
    <h1>正确格式s2：{{ s2 }}</h1>
    -----------------------
    <h1> {{ right }}</h1>
    <h1> {{ rightWord }}</h1>
    ---
    {{ a }}
    --------------
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.value1"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input v-model="form.value2"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input v-model="form.value3"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>

export default {
  name: "swiper",
  data() {
    return {
      form: {
        addressList: [],
      },
      initial: 2,
      arr1: '草稿',
      arr2: '发布',
      arr3: '执行',
      word: '["1011","1012"]',
      words: '',
      s: '',
      s2: '',
      right: ['北京分局', '海南分局'],
      rightWord: [
        {deptCode: '1011', deptValue: '北京分局'},
        {deptCode: '1012', deptValue: '海南分局'}
      ],
      a: ""
    }
  },
  mounted() {
    this.words = this.word.slice(1, this.word.length - 1);
    this.s = this.words.replace(/\"/g, "")
    this.s2 = this.s.split(',')
    this.s2.forEach(o => {
      this.rightWord.forEach(i => {
        if (i.deptCode === o) {
          this.a += i.deptValue + ','
        }
      })
    })
    console.log(this.a.slice(0, this.a.length - 1))
  },
  methods: {
    submit() {
      this.form.value4 = {
        latitude: this.form.value1.split('.')[0],
        longitude: this.form.value1.split('.')[1]
      }
      this.form.value5 = {
        latitude: this.form.value2.split('.')[0],
        longitude: this.form.value2.split('.')[1]
      }
      this.form.value6 = {
        latitude: this.form.value3.split('.')[0],
        longitude: this.form.value3.split('.')[1]
      }
      console.log(this.form.addressList.push(this.form.value4, this.form.value5, this.form.value6))
      console.log(this.form.addressList)
    },
    onChange(index) {
      // console.log(index)
    },
    hanleClick(type) {
      console.log(type, '点击')
      if (type == 1) {
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
