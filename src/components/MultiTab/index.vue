<template>
  <div class="ant-pro-multi-tab">
    <div class="ant-pro-multi-tab-wrapper">
      <a-tabs hideAdd type="editable-card" v-model:activeKey="activeKey" :tabBarStyle="{ margin: 0, paddingLeft: '16px', paddingTop: '1px' }" @edit="onEdit">
        <a-tab-pane v-for="page in pages" :key="page.fullPath" :closable="pages.length > 1" style="height: 0">
          <template #tab>
            <a-dropdown :trigger="['contextmenu']">
              <span :style="{ userSelect: 'none' }">{{ page.meta.customTitle || page.meta.title }}</span>
              <template #overlay>
                <a-menu
                  @click="
                    ({ key, item, domEvent }) => {
                      closeMenuClick(key, page.fullPath)
                    }
                  "
                >
                  <a-menu-item key="closeSelf">关闭当前标签</a-menu-item>
                  <a-menu-item key="closeRight">关闭右侧</a-menu-item>
                  <a-menu-item key="closeLeft">关闭左侧</a-menu-item>
                  <a-menu-item key="closeAll">关闭全部</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup name="MultiTab">
import { ref, reactive, watch, getCurrentInstance } from 'vue'
import { useRouter, RouteLocationNormalizedLoaded } from 'vue-router'
import events from '@/utils/eventBus'
import { message } from 'ant-design-vue'
import './index.less'

let fullPathList: Array<string> = []
const pages = reactive<Array<RouteLocationNormalizedLoaded>>([])
const activeKey = ref('')
const router = useRouter()
const { proxy } = getCurrentInstance()

const selectedLastPath = () => {
  activeKey.value = fullPathList[fullPathList.length - 1]
}

;(function created() {
  // 全局的事件绑定用于页面内控制tab标签,暂时用不上
  // #region
  events.once('multiTab.open', (val) => {
    if (!val) {
      throw new Error(`multi-tab: open tab ${val} err`)
    }
    activeKey.value = val
  })
  events.once('multiTab.close', (val) => {
    if (!val) {
      closeSelf(activeKey.value)
      return
    }
    closeSelf(val)
  })
  events.once('multiTab.rename', ({ key, name }) => {
    console.log('rename', key, name)
    try {
      const item = pages.find((item) => item.path === key)
      item!.meta.customTitle = name
      proxy.$forceUpdate()
    } catch (e) {
      console.error(e)
    }
  })
  // #endregion

  pages.push(router.currentRoute.value)
  fullPathList.push(router.currentRoute.value.fullPath)
  selectedLastPath()
})()

const onEdit = (targetKey, action) => {
  //proxy[action](targetKey)
  remove(targetKey)
}
const remove = (targetKey) => {
  const temp = pages.filter((page) => page.fullPath !== targetKey)
  pages.length = 0
  pages.push(...temp)
  fullPathList = fullPathList.filter((path) => path !== targetKey)
  // 判断当前标签是否关闭，若关闭则跳转到最后一个还存在的标签页
  if (!fullPathList.includes(activeKey.value)) {
    selectedLastPath()
  }
}

// content menu
const closeSelf = (e) => {
  // 判断是否为最后一个标签页，如果是最后一个，则无法被关闭
  if (fullPathList.length > 1) {
    remove(e)
  } else {
    message.info('这是最后一个标签了, 无法被关闭')
  }
}
const closeLeft = (e) => {
  const currentIndex = fullPathList.indexOf(e)
  if (currentIndex > 0) {
    fullPathList.forEach((item, index) => {
      if (index < currentIndex) {
        remove(item)
      }
    })
  } else {
    message.info('左侧没有标签')
  }
}
const closeRight = (e) => {
  const currentIndex = fullPathList.indexOf(e)
  if (currentIndex < fullPathList.length - 1) {
    fullPathList.forEach((item, index) => {
      if (index > currentIndex) {
        remove(item)
      }
    })
  } else {
    message.info('右侧没有标签')
  }
}
const closeAll = (e) => {
  const currentIndex = fullPathList.indexOf(e)
  fullPathList.forEach((item, index) => {
    if (index !== currentIndex) {
      remove(item)
    }
  })
}
const closeMenuClick = (key: string, route) => {
  const allFun = { closeAll, closeRight, closeLeft, closeSelf }
  allFun[key](route)
}

watch(
  () => router.currentRoute.value,
  (newVal) => {
    activeKey.value = newVal.fullPath
    if (fullPathList.indexOf(newVal.fullPath) < 0) {
      fullPathList.push(newVal.fullPath)
      pages.push(newVal)
    }
  }
)

watch(activeKey, (newPathKey) => {
  router.push({ path: newPathKey })
})
</script>
<style lang="less">
.tab_style() {
  .ant-tabs-card {
    padding-left: 0;

    .ant-tabs-nav-container {
      .ant-tabs-tab-prev:hover,
      .ant-tabs-tab-next:hover {
        // width: 22px;
        background-color: rgba(0, 0, 0, 0.03);
      }

      font-size: 13px;
      height: 39px;
    }

    .ant-tabs-tab {
      margin-right: 0;
      border-radius: 0px;
      border-top: 0px;
      height: 40px;
    }

    .ant-tabs-tab-active {
      //   padding-bottom: 0px;
      //   background-color: rgba(0, 0, 0, 0.1);
      height: 38px;
      border-bottom-color: transparent;

      .anticon-close {
        display: inline-block;
      }
    }

    .ant-tabs-tab:hover {
      padding-left: 20px;
      padding-right: 20px;

      .anticon-close {
        color: #333;
        display: inline-block;
      }
    }
  }
}

.ant-pro-multi-tab-wrapper {
  min-height: 42px;
  .tab_style() !important;
}
</style>
