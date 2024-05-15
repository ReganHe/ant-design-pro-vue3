<template>
  <div class="custom-perm-tree">
    <Tree :tree-data="treeModel.data" :checkedKeys="defaultCheckedKeys" :selectable="false" v-model:expandedKeys="treeModel.expandedKeys" :accordion="true" :checkable="true" @check="handleCheck" />
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { Tree } from 'ant-design-vue'
import { DataNode } from 'ant-design-vue/es/vc-tree/interface'
import { findStaticMenu } from '@/api/auto/ApiGwsRole'

const props = defineProps({
  model: {
    type: Object,
    default: () => {}
  },
  operateType: {
    type: String,
    default: 'add'
  }
})

const emits = defineEmits(['update:component-data'])

const defaultCheckedKeys = computed(() => [
  ...(props.model.checkedPerms['funcPointList'] || []),
  ...props.model.checkedPerms['routeList'].filter((r) => (props.model.checkedPerms['noFuncLeafRouteIds'] ? props.model.checkedPerms['noFuncLeafRouteIds'].indexOf(r) > -1 : r))
])

const treeModel = reactive({
  expandedKeys: ['-1D'],
  checkedKeys: [
    ...(props.model.checkedPerms['funcPointList'] || []),
    ...props.model.checkedPerms['routeList'].filter((r) => (props.model.checkedPerms['noFuncLeafRouteIds'] ? props.model.checkedPerms['noFuncLeafRouteIds'].indexOf(r) > -1 : r))
  ],
  data: [] as DataNode[],
  menu: {
    routeList: [] as string[],
    noFuncLeafRouteIds: [] as string[],
    funcPointList: [] as Object[]
  }
})

const handleMenuData = (parentRouteKey, data) => {
  return (data || []).map((item) => {
    if (item.type === '0' || !item.type) {
      //终端
      return {
        title: item.name,
        key: item.vid,
        children: item.children ? handleMenuData(item.vid, item.children) : []
      }
    } else if (item.type === '1') {
      // 菜单
      if (!item.children || item.children.length === 0) {
        treeModel.menu.noFuncLeafRouteIds.push(item.vid)
      }

      return {
        isRouteLeaf: true,
        title: item.name,
        key: item.vid,
        children: item.children ? handleMenuData(item.vid, item.children) : []
      }
    } else if (item.type === '2') {
      // 功能点
      return {
        parentRouteKey: parentRouteKey,
        isLeaf: true,
        title: item.name,
        key: item.vid,
        children: item.children ? handleMenuData(item.vid, item.children) : []
      }
    }
  })
}

const getTreeData = async () => {
  const res = await findStaticMenu()
  console.log('getTreeData', res)
  treeModel.data = handleMenuData(null, res)
}

const handleCheck = (checkedKeys, { checkedNodes }) => {
  console.log('handleCheck>>', checkedKeys, checkedNodes)
  let routeList = [] as string[]
  let funcPointList = [] as string[]

  checkedNodes.forEach((item) => {
    if (item.isRouteLeaf) {
      if (!routeList.includes(item.key)) {
        routeList.push(item.key)
      }
    }

    if (item.isLeaf) {
      funcPointList.push(item.key)
      if (!routeList.includes(item.parentRouteKey)) {
        routeList.push(item.parentRouteKey)
      }
    }
  })

  console.log('routeList-funcPointList>>>', routeList, funcPointList)
  emits('update:component-data', {
    routeList,
    funcPointList
  })
}

getTreeData()
</script>

<style lang="scss" scoped>
.custom-perm-tree {
  padding-left: 12px;
}
</style>
