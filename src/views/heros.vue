<template>
  <div class="container">
    <div class="mt-4">
      <el-input
          v-model="input"
          placeholder="Please input"
          class="input-with-select"
          :clearable="true"
          @change="change"
      >
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="T" value="1"/>
            <el-option label="F" value="2"/>
            <el-option label="Y" value="3"/>
            <el-option label="Z" value="4"/>
          </el-select>
        </template>
        <template #append>
          <el-icon :size="30" @click="clickSearch(input)">
            <Loading/>
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="heroBox">
      <div class="heroBox-item" v-for="itemHero in heroList" :key="itemHero.id">
        <img :src="itemHero.img" width="91" alt=""/>
        <p>{{ itemHero.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {Search} from '@element-plus/icons-vue';

export default {
  name: "heros",
  data() {
    return {
      input: '',
      select: '',
      heroList: [
        {id: 1, img: "//game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg", name: "妲己", type: 'F'},
        {id: 2, img: "//game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg", name: "花木兰", type: 'Z'},
        {id: 3, img: "//game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg", name: "貂蝉", type: 'F'},
        {id: 4, img: "//game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg", name: "赵云", type: 'Y'},
        {id: 5, img: "//game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg", name: "程咬金", type: 'T'},
        {id: 6, img: "//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg", name: "百里守约", type: 'S'},
        {id: 7, img: "//game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg", name: "李白", type: 'D'},
        {id: 8, img: "//game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg", name: "百里玄策", type: "Z"}
      ]
    }
  },
  methods: {
    change(options) {
      if (options === '') {
        location.reload();
        return this.heroList
      }
    },
    clickSearch(input) {
      if (this.input !== '') {
        let le = this.heroList.filter((item) => item.name.includes(this.input))
        let reg = new RegExp(this.input, 'g')
        console.log(reg)
        if (reg) {
          le.map((o) => {
            console.log(o)
            return o.name.replace(reg, function (input) {
              return `<em style="font-size: 21px;color:royalblue">${input}</em>`
            })
          })
        }
        this.heroList = le
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 60px auto;

}

.el-input {
  width: 30%;
}

.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

.heroBox {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.heroBox .heroBox-item {
  flex: 1;
  text-align: center;
}

.heroBox .heroBox-item img {
  border: 2px solid #258DF2;
  border-radius: 10px 0 10px 0;
}

.heroBox .heroBox-item p {
  /*// p是块元素，span行内元素 margin: 15 px;*/
  font-size: 14px;
  font-weight: bold;
}
</style>
