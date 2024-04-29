<template>
  <div class="breadcrumb">
    <!-- {{ breadcrumbData }} -->
    <a-breadcrumb>
      <transition-group name="breadcrumb">
        <a-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="index">
          <!-- 不可点击项 -->
          <a-breadcrumb-item v-if="index === breadcrumbData.length - 1">
            {{
              item.meta.title
            }}
          </a-breadcrumb-item>
          <!-- 可点击项 -->
          <!-- <a-breadcrumb-item v-else> -->
          <a v-else @click="onLinkClick(item)" :key="index">
            {{ item.meta.title }}
          </a>
          <!-- </a-breadcrumb-item> -->
        </a-breadcrumb-item>
      </transition-group>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
// #region import
//库
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
//#endregion

// #region 初始化
const route = useRoute()
// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    item => item.meta && item.meta.title
  )

  console.log(breadcrumbData.value)
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)

// 处理点击事件
const router = useRouter()
const onLinkClick = item => {
  // console.log(item)
  router.push(item.path)
}

// #endregion
</script>
<style scoped lang="scss">
.breadcrumb {
  display: inline-block;
}

.breadcrumb-enter-active {
  transition: all 0.5s;

}

.breadcrumb-leave-active {
  transition: all 0.01s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
