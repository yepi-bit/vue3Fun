<template>
  <div class="box">
    <div style="float: right;margin-right: 100px;height: 20px" class="history">
      <el-icon color="#000" :size="30" @click="visibleClick = !visibleClick">
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
  </div>
  <div>
    <router-link to="/">
      <el-button type="danger" ghost>listLength</el-button>
    </router-link>
    |
    <router-link to="/themeColor">
      <el-button type="danger" ghost>themeColor</el-button>
    </router-link>
  </div>

  <div>
    <router-view/>
  </div>
</template>
<script setup>
import {ref, reactive} from 'vue'
import {Share, Loading, Search} from '@element-plus/icons-vue';

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
const visibleClick = ref(false)
</script>
<style lang="less">
.box {
  position: fixed;
  right: 40px;
  top: 10px;
  display: flex;
  align-items: center;
  z-index: 8;

.history {
  position: relative;
  user-select: none;

&
-content {
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

::v-deep(.el-tabs) {

.el-tabs__header {
  box-sizing: border-box;
  padding: 0 36px;

.el-tabs__active-bar {
  background-color: lemonchiffon;
}

.el-tabs__item {
  color: coral;
}

.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: cornflowerblue;
}

}

.el-tabs__content {
  margin-bottom: 10px;

.el-tab-pane {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

}
}
}
}
}
</style>
