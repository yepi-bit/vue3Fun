<template>
  <div class="box">
    <div style="float: right;margin-right: 100px;height: 20px" class="history">
      <el-icon :color="color" :size="30" @click="visibleClick = !visibleClick">
        <Share/>
      </el-icon>
      <!--        <Search style="width: 1em; height: 1em; margin-right: 8px"/>-->
      <!--        <el-icon class="is-loading">-->
      <!--            <Loading/>-->
      <!--        </el-icon>-->
      <transition
          enter-active-class="animate__zoomIn"
          leave-active-class="animate__hinge"
      >
        <div v-show="visibleClick" class="history-content">
          <el-tabs v-model="tabs.active">
            <el-tab-pane
                v-for="item in tabs.list"
                :key="item.value"
                :label="item.name"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
      </transition>
    </div>
    <div style="margin-right: 36px">
      <el-color-picker v-model="themecolor" show-alpha @change="showTheme"/>
      主题
    </div>
    <div :class="[num >= 1 ? 'right-box': '']">
      <div class="around">
        <span class="comBo" :style="{color: color,fontWeight:'bold'}" @click="comBo">COMBO</span>
        <div class="around-item" v-for="item in 5" :key="item">
          <img src="./assets/logo.png" alt=""/>
        </div>
      </div>
    </div>
  </div>
  <div>
    <router-link to="/">
      <el-button type="danger" ghost>listLength</el-button>
    </router-link>
    |
    <router-link to="/themeColor">
      <el-button type="danger" ghost>themeColor</el-button>
    </router-link>
    |
    <router-link to="/player">
      <el-button type="danger" ghost>player</el-button>
    </router-link>
    |
    <router-link to="/heros">
      <el-button type="danger">heros</el-button>
    </router-link>
    |
    <router-link to="/changeValue">
      <el-button type="danger">changeValue</el-button>
    </router-link>
    |
    <router-link to="/swiper">
      <el-button type="danger">swiper</el-button>
    </router-link>
    |
    <router-link to="/checkTest">
      <el-button type="danger">checkTest</el-button>
    </router-link>
  </div>

  <div>
    <router-view/>
  </div>
</template>
<script setup>
import {ref, reactive, onMounted} from 'vue'
import {useStore} from 'vuex'

const store = useStore();
import {Share, Loading, Search} from '@element-plus/icons-vue';
import animated from 'animate.css'
import {ElMessage} from 'element-plus'

const color = ref('rgb(49, 217, 136, 1)')
const themecolor = ref('rgb(203, 237, 218, 1)')
const showTheme = (preset) => {
  store.commit('setthmeColor', preset)
  themecolor.value = store.getters.showColor
  color.value = store.getters.showColor
  document.querySelector("body").setAttribute("style", `background-color:${themecolor.value};transition: 0.7s;`);
}
onMounted(() => {
  around()
})
const around = () => {
  const items = document.querySelectorAll('.around .around-item')
  const r = document.querySelectorAll('.around')[0].clientWidth / 2
  console.log(r)
  const count = items.length
  const deg = 360 / count
  for (let i = 0; i < count; i++) {
    let t = i * deg
    t = (Math.PI / 180) * t
    const x = Math.sin(t) * r, y = -Math.cos(t) * r
    items[i].style.transform = `translate(${x}px, ${y}px)`;
  }
}

const tabs = reactive({
  active: '0',
  list: [
    {
      name: '收藏',
      value: '0'
    },
    {
      name: '历史',
      value: '1'
    }
  ]
})
const num = ref(0)
const comBo = () => {
  num.value += 1
  setTimeout(() => {
    num.value = 0
  }, 800)
}
const visibleClick = ref(false)
</script>
<style lang="less" scoped>
.around {
  width: 100px;
  height: 100px;
  /*outline: 1px solid royalblue;*/
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: move 20s linear infinite;
}

.around .around-item {
  position: absolute;
}

.around img {
  width: 20px;
  height: 20px;
  animation: move 20s linear infinite reverse;
}

@keyframes move {
  to {
    transform: rotate(360deg);
  }
}

.right-box::after {
  content: '';
  background: url(./assets/zanplus.webp) no-repeat;
  position: absolute;
  background-size: 100%;
  top: 70%;
  right: 70%;
  width: 100px;
  height: 100px;
  color: transparent;
}

.comBo {
  font-size: 21px;
}

.comBo:hover {
  font-size: 26px;
  color: darkorange;
}

.box {
  position: fixed;
  right: 40px;
  top: 10px;
  display: flex;
  align-items: center;
  z-index: 8;
}
.history {
  position: relative;
  user-select: none;
}

.history-content {
  position: absolute;
  right: 30px;
  top: 100%;
  width: 160px;
  margin-top: 10px;
  background: #ffffff;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
  border-radius: 4px;
  overflow: hidden;
  animation-duration: 0.625s;
}

.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: cornflowerblue;
}

.el-tabs__content {
  margin-bottom: 10px;
}

.el-tab-pane {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

</style>
