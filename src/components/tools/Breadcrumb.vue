<template>
  <a-breadcrumb class="breadcrumb">
    <a-breadcrumb-item v-for="item in state.breadList" :key="item.name">
      <router-link v-if="item.name !== state.name" :to="{ path: item.path === '' ? '/' : item.path }">{{ item.meta.title }}</router-link>
      <span v-else>{{ item.meta.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup name="Breadcrumb">
import { reactive, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive<any>({ name: '', breadList: [] })

const getBreadcrumb = () => {
  const route = router.currentRoute.value
  state.breadList = []

  state.name = route.name
  route.matched.forEach((item) => {
    // item.name !== 'index' && this.breadList.push(item)
    state.breadList.push(item)
  })
}

watch(
  () => router.currentRoute.value,
  () => {
    getBreadcrumb()
  }
)

onMounted(() => {
  getBreadcrumb()
})
</script>
