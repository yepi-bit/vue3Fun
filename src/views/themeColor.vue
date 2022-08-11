<template>
  <div id="setting">
    <div class="setting-box setting-themecolor">
      <div class="setting-box__title">主题色配置</div>
      <ThemeColorEditor
          ref="themeColorEditorComp"
          :themes="dfThemes"
          @onColorChanged="onColorChanged"
      />
      <div class="setting-box__control">
        <el-button type="danger" round @click="resetThemeColor">重置</el-button>
        <el-button type="primary" round @click="saveThemeColor">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'

import {getThemeInstance} from '../utils/theme.class'

import ThemeColorEditor, {
  ThemeColorVar
} from '../components/ThemeColorEditor.vue'
import {ElForm, ElNotification} from 'element-plus'
import {useSystemConfigStore} from '../stores/systemConfig.store'

// import {FormRulesMap} from 'element-plus/lib/components/form/src/form.type'

function themeColorModule() {
  const themeColorEditorComp = ref<InstanceType<typeof ThemeColorEditor>>()
  const dfThemes = getThemeInstance()

  const s = (param: ThemeColorVar[]) => {
    getThemeInstance()?.colorVarInit(param)
  }
  const saveThemeColor = () => {
    const theme = themeColorEditorComp.value!.getCurrnetTheme()
    getThemeInstance()?.saveLocalColor(theme)
    ElNotification({
      title: '主题配置',
      message: '主题保存成功',
      type: 'success'
    })
  }
  const resetThemeColor = () => {
    getThemeInstance()?.clearLocalColor()
    themeColorEditorComp.value!.reset()
  }
  const onColorChanged = () => {
    console.log('2')
  }

  return {
    themeColorEditorComp,
    onColorChanged,
    saveThemeColor,
    resetThemeColor,
    dfThemes
  }
}

function configModule() {
  const configFormComp = ref<InstanceType<typeof ElForm>>()
  const systemConfigStore = useSystemConfigStore()

  const config = reactive({
    serverIp: systemConfigStore.serverIp
  })
  const configRules = reactive({
    serverIp: [
      {
        trigger: 'blur',
        validator(rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('请检查地址格式'))
          }
        }
      }
    ]
  })
  const saveConfig = async () => {
    try {
      await configFormComp.value!.validate()
      systemConfigStore.saveServerIp(config.serverIp)
      // ElNotification({
      //   title: '参数配置',
      //   message: '参数保存成功',
      //   type: 'success'
      // })
      location.reload()
    } catch (e) {
      // console.log(e)
    }
  }
  return {
    config,
    configRules,
    saveConfig,
    configFormComp
  }
}

export default defineComponent({
  name: 'Setting',
  components: {
    ThemeColorEditor
  },
  setup() {
    return {
      ...themeColorModule(),
      ...configModule()
    }
  }
})
</script>
<style lang="less" scoped>
#setting {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.setting-box {
  width: 100%;
  background: rgb(246,245,244);
  padding: 30px;
  box-sizing: border-box;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  margin-bottom: 30px;

}
</style>
