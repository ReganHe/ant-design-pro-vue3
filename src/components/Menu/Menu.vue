<template>
  <a-menu :mode="mode" :theme="theme" :openKeys="openKeys.value" :selectedKeys="selectedKeysRef"
    @openChange="onOpenChange" @click="onSelect" class="SysMenu">
    <template v-for="menu in menus" :key="menu.path">
      <RenderSubMenu :menu="menu" v-if="!menu.meta?.hidden" />
    </template>
  </a-menu>
</template>
<script lang="ts" setup name="Menu">
import { reactive, computed, onMounted, watch, ref } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'
import RenderSubMenu from './RenderSubMenu.vue'

const props = defineProps({
  menus: {
    type: Array<RouteRecordRaw>,
    required: true
  },
  theme: {
    type: String,
    required: false,
    default: 'dark'
  },
  mode: {
    type: String,
    required: false,
    default: 'inline'
  },
  collapsed: {
    type: Boolean,
    required: false,
    default: false
  }
})
const router = useRouter()
const route = router.currentRoute

const openKeys = reactive<any>({ value: [] })
const cachedOpenKeys = reactive<any>({ value: [] })
const selectedKeysRef = ref<any>([])
const rootSubmenuKeysRef = computed(() => props.menus.map(r => r.path))

onMounted(() => {
  updateMenu()
})

watch(
  () => props.collapsed,
  (val) => {
    if (val) {
      cachedOpenKeys.value = openKeys.value.concat()
    } else {
      openKeys.value = cachedOpenKeys.value
    }
  }
)

// 主要作用:使用router.push跳转页面时更左侧新菜单选中项
watch(
  () => route.value,
  (val) => {
    updateMenu()
  }
)

// select menu item
const onOpenChange = (openKeysParams) => {
  // 在水平模式下时执行，并且不再执行后续
  if (props.mode === 'horizontal') {
    openKeys.value = openKeysParams
    return
  }
  // 非水平模式时
  const latestOpenKey: string = openKeysParams.find((key) => /*去掉这个!则可以全部打开菜单(目前只能打开一个菜单)*/ !openKeys.value.includes(key))
  if (!rootSubmenuKeysRef.value.includes(latestOpenKey)) {
    openKeys.value = openKeysParams
  } else {
    openKeys.value = latestOpenKey ? [latestOpenKey] : []
  }
}

const emit = defineEmits(['menuSelect'])
const onSelect = ({ item, key, selectedKeys: selectedKeysParams }) => {
  selectedKeysRef.value = selectedKeysParams
  emit('menuSelect', { item, key, selectedKeys: selectedKeysRef })
}
const updateMenu = () => {
  const routes = route.value.matched.concat()
  const { hidden } = route.value.meta
  if (routes.length >= 3 && hidden) {
    routes.pop()
    selectedKeysRef.value = [routes[routes.length - 1].path]
  } else {
    selectedKeysRef.value = [routes.pop()!.path]
  }
  const openKeysArr: any = []
  if (props.mode === 'inline') {
    routes.forEach((item) => {
      openKeysArr.push(item.path)
    })
  }
  props.collapsed ? (cachedOpenKeys.value = openKeysArr) : (openKeys.value = openKeysArr)
}
</script>
