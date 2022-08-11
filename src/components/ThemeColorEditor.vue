<template>
  <div class="themecolor-editor">
    <div class="themecolor-editor__box">
      <h4>预设选择</h4>
      <div class="themecolor-editor__preset">
        <div
            v-for="item in themePresets"
            :key="item.key"
            class="themecolor-editor__preset-item"
            @click="changePreset(item.value)"
        >
          <div class="pile">
            <div
                v-for="color in getMainThemeColor(item.value)"
                :key="color"
                :style="{ background: color }"
            ></div>
          </div>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="themecolor-editor__box">
      <h4>颜色选择</h4>
      <div
          v-for="item in themes"
          :key="item.prop"
          class="themecolor-editor__color"
      >
        <el-color-picker
            v-model="colors[item.prop]"
            show-alpha
            @change="onColorChanged"
        />
        <span>{{ item.descr }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive, watch} from 'vue'
import {THEMES} from '../utils/static'
import {getThemeInstance} from '../utils/theme.class'

export interface ThemeColorVar {
  /** 形参或key */
  prop: string
  /** 十六进制颜色值 */
  value: string
  /** css变量名称 */
  var: string
  /** 描述 */
  descr: string
}

export default defineComponent({
  name: 'ThemeColorEditor',
  props: {
    themes: {
      type: Array as PropType<ThemeColorVar[]>,
      default: () => []
    }
  },
  emits: {
    onColorChanged: (param: ThemeColorVar[]) => true
  },
  setup(props, {emit}) {
    const colors = reactive(
        props.themes.reduce((totol, {prop, value}) => {
          totol[prop] = value
          return totol
        }, {} as { [prop: string]: string })
    )

    const onColorChanged = () => {
      emit(
          'onColorChanged',
          props.themes.map((param) => ({
            ...param,
            value: colors[param.prop]
          }))
      )
    }
    const changePreset = (preset: string[]) => {
      props.themes.forEach((item, index) => {
        const color = preset[index] || '#000'
        colors[item.prop] = color
      })
      onColorChanged()
    }
    /** 获取当前主题配置信息 */
    const getCurrnetTheme = () => {
      return props.themes.map((param) => ({
        ...param,
        value: colors[param.prop]
      }))
    }
    const reset = () => {
      props.themes.forEach(({prop}) => {
        if (typeof colors[prop] !== 'undefined') {
          colors[prop] =
              getThemeInstance()!.current.value.find((item) => item.prop === prop)
                  ?.value || ''
        }
      })
    }
    const getMainThemeColor = (colors: string[]) => {
      console.log(colors),
          [...new Set(colors)].slice(0, 3)
    }


    return {
      colors,
      reset,
      onColorChanged,
      getMainThemeColor,
      changePreset,
      getCurrnetTheme,
      themePresets: THEMES
    }
  }
})
</script>
<style lang="less" scoped>
.themecolor-editor {
  position: relative;
  user-select: none;
}
</style>
