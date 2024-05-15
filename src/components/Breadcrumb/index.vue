<template>
  <div class="breadcrumb">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="index">
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbData.length - 1">
          {{
            item.meta.title
          }}
        </span>
        <!-- 可点击项 -->
        <router-link v-else :to="item.path">
          {{ item.meta.title }}
        </router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, ComponentInternalInstance } from 'vue'

const { proxy } = getCurrentInstance() as ComponentInternalInstance
const breadcrumbData = computed(() => {
  return proxy!.$route.matched.filter(
    item => item.meta && item.meta.title
  )
})
</script>
<style scoped lang="scss">
.breadcrumb {
  display: inline-block;
}
</style>
