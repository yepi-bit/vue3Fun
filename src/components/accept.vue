<template>
  <div>
    <h1>S 页面</h1>
    <el-button @click="btn">改变值{{ num }}</el-button>
    <div>{{ msg }}</div>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
import {ref, toRef, toRefs, defineEmits, defineProps} from "vue";

const props = defineProps(['num', 'data'])
// 或
// defineProps({
//   data: String
// })

// const msg = ref(props.data);

// 父组件改变 data 的值，子组件 msg 无法响应 data 的变化。
// 因为 ref 是对传入数据的拷贝，原始值 data 的改变并不影响 msg
// toRef 是对传入数据的引用，原始值 data 改变会影响 msg
// 方法1
const msg = toRef(props, 'data');
// 方法2：
const {data} = toRefs(props);

const emit = defineEmits(['nums']) // 接收父组件传过来的方法
const btn = () => {
  emit('nums', 2000)
}
</script>

<style scoped>

</style>
