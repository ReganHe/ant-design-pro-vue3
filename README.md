# vue3-antdv-template

基于 Vue3 和 AntDesignVue4.x 的管理后台模板项目

## 开发环境

- Node 20.11.6
- Vite 5.x

## 业务图标

封装了统一的图标组件 SvgIcon，位于 `src/components/SvgIcon`下，同时支持两种图标

- 支持所有 AntDesignVue 组件库自带的图标，无须注册，可以直接使用

```javascript
<svg-icon name="PlusOutlined" />
```

- 对于 AntDesignVue 组件库没有的图标，需要手动下载图标的 SVG 文件，放到 `src/assets/icons` 文件夹下,也无须注册，即可使用

```javascript
// 此处使用的是`src/assets/icons/logo.svg`
<svg-icon name="logo" />
```

## 日期时间

统一使用 dayjs，模块已实现如下功能：

- 时区统一使用东八区，而非用户本机时区
- 本地化统一使用中文
- 模板已将 dayjs 挂载到全局变量

### 使用方式

#### 1. 在代码中使用变更（Setup 方式）

```html
<script setup>
  import { getCurrentInstance } from 'vue'
  const { proxy } = getCurrentInstance()
  console.log(proxy.$dayjs)
</script>
```

#### 2.在模板中使用变量

```html
<template>
  <div>{{ $dayjs().format('YYYY-MM-DD HH:mm:ss') }}</div>
</template>
```
