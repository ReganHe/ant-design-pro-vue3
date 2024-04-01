<template>
  <a-sub-menu v-if="props.menu.children" :key="props.menu.path" popupClassName="popupSubMenu">
    <template #icon>
      <SvgIcon v-if="props.menu.meta?.icon" :name="props.menu.meta?.icon" fontSize="18px" />
    </template>
    <template #title>{{ props.menu.meta?.title }}</template>
    <template v-for="sub in props.menu.children">
      <!-- 递归组件 -->
      <RenderSubMenu :menu="sub" />
    </template>
  </a-sub-menu>
  <!-- renderMenuItem -->
  <a-menu-item :key="props.menu.path" v-if="!props.menu.children && !props.menu.meta?.hidden">
    <template #icon>
      <SvgIcon :name="props.menu.meta?.icon" v-if="props.menu.meta?.icon" fontSize="18px" />
    </template>
    <!-- 外部链接 -->
    <a v-if="props.menu.meta?.target" :href="props.menu.meta?.target"
      :target="props.menu.meta.blank === false ? '' : '_blank'">
      <!-- span重复了吧?这就是template的弊端,jsx才是王道 -->
      <span>{{ props.menu.meta?.title }}</span>
    </a>
    <router-link :to="props.menu.path" v-else>
      <span>{{ props.menu.meta?.title }}</span>
    </router-link>
  </a-menu-item>
</template>
<script lang="ts" setup name="RenderSubMenu">
import SvgIcon from '@/components/SvgIcon/index.vue'
import type { PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router';

const props = defineProps({
  menu: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  }
})
</script>
<style lang="less" scoped>
.menuName {

  svg,
  span {
    vertical-align: middle;
  }

  svg {
    margin-right: 10px;
  }
}
</style>
