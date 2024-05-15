<template>
  <Tree :tree-data="treeModel.data" v-model:expandedKeys="treeModel.expandedKeys" v-model:selectedKeys="treeModel.selectedKeys" @select="handleSelect" />
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { Tree } from 'ant-design-vue'
import { DataNode } from 'ant-design-vue/es/vc-tree/interface'
import { getOrgsPaged } from '@/api/auto/ApiGisc'
const props = defineProps({
  companyInfo: {
    type: Object
  }
})
const emits = defineEmits(['select'])

const treeModel = reactive({
  expandedKeys: [] as number[],
  selectedKeys: [] as number[],
  data: [] as DataNode[]
})

const getTreeData = async () => {
  if (!props.companyInfo) {
    return
  }

  const siteRes = await getOrgsPaged({
    parentId: props.companyInfo.id,
    pageNum: 1,
    pageSize: 1000
  })

  treeModel.data = [
    {
      key: props.companyInfo.id,
      level: props.companyInfo.level,
      title: props.companyInfo.orgName,
      path: props.companyInfo.path,
      children: siteRes.list.map((r) => {
        return {
          key: r.id,
          level: r.level,
          title: r.orgName,
          path: r.path
        }
      })
    }
  ]
  treeModel.expandedKeys = [props.companyInfo.id]
  treeModel.selectedKeys = [props.companyInfo.id]
}

const handleSelect = (selectedKeys, e) => {
  console.log('handleSelect', selectedKeys, e)
  emits('select', e.selectedNodes[0])
}

watch(
  () => props.companyInfo,
  () => getTreeData(),
  { deep: false }
)
</script>
