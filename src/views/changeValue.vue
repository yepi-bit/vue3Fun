<template>
  <div>
    <h1>F 页面</h1>
    <accept :num="num" @nums="addnum" :data="data"/>
  </div>
</template>

<script setup>
import accept from '../components/accept.vue'
import {ref} from "vue"

const num = ref(1)
const addnum = (val) => {
  num.value = val
}

const data = ref('hello')
setTimeout(() => {
  data.value = 'how are you doing'
}, 2000)
</script>

<style scoped>

</style>
