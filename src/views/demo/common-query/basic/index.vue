<template>
  <div class="common-query-container">
    <ca-common-query v-bind="query" />
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { CommonQuery, QueryField } from '#/castor-antd'

const fields = computed<Array<QueryField>>(() => {
  return [
    {
      type: 'default',
      label: '姓名',
      dataField: 'name',
      columnSpan: 1,
      extendProps: {
        formItemProps: {
          labelCol: { style: { width: '40px' } },
          wrapperCol: { style: { width: '120px' } }
        }
      }
    },
    {
      type: 'default',
      label: '地址',
      dataField: 'address',
      columnSpan: 1,
      extendProps: {
        formItemProps: {
          labelCol: { style: { width: '40px' } },
          wrapperCol: { style: { width: '200px' } }
        }
      }
    }
  ]
})

const handleFilter = () => {
  console.log('handleFilter', query.model)
}

const handleReset = () => {
  console.log('handleReset', query.emitRegister)
  query.emitRegister?.resetFields?.()
  handleFilter()
}

const query = reactive<CommonQuery>({
  loading: false,
  model: {
    name: '张三',
    address: '长江路555号'
  },
  fields,
  commands: [
    {
      text: '查询',
      command: 'handleFilter',
      elementProps: {
        type: 'primary'
      },
      canKeyDown: true
    },
    {
      text: '重置',
      command: 'handleReset'
    }
  ],
  elementProps: {
    labelCol: { style: { width: '40px' } },
    wrapperCol: { style: { flex: 1 } }
  },
  emitRegister: {
    handleFilter,
    handleReset
  }
})
</script>
<style lang="scss" scoped>
.common-query-container {
  background: white;
  margin: 12px;
  padding: 12px;
}
</style>
