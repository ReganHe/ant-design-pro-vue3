<template>
  <svg v-if="isLocalSvgFile" aria-hidden="true" :width="fontSize" :height="fontSize" :style="{ color }">
    <use :xlink:href="symbolIdRef" />
  </svg>
  <component v-else :is="icons[antvIconNameRef]" :style="{ fontSize: fontSize }" v-bind="$attrs">
  </component>
</template>

<script lang="ts" setup name="SvgIcon">
// 注意svg文件的<svg> 标签上必须有 fill="currentColor" 字段,这样才能从外部的span等标签复制颜色,否则颜色不可变
import { computed } from 'vue'
import * as icons from "@ant-design/icons-vue";

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  fontSize: {
    type: String,
    default: '14px'
  }
})
const svgs = import.meta.glob('/src/assets/icons/**/*.svg')
const symbolIdRef = computed(() => `#${props.prefix}-${props.name}`)
/** 判断是否是本地svg文件 */
const isLocalSvgFile = computed(() => {
  console.log('svgs', Object.keys(svgs))
  return Object.keys(svgs).includes(`/src/assets/icons/${props.name}.svg`);
})

/** 转化icon名称 */
const antvIconNameRef = computed(() => {
  if (!props.name.includes("-")) {
    return props.name;
  }
  return props.name.charAt(0).toUpperCase() + props.name.slice(1).replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
});


</script>
