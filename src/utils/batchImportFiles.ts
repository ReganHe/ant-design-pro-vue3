import { StoreFile } from './types'

export const getRoutePages = () => {
  const pages = import.meta.glob('/src/views/**/*.vue', { import: 'default', eager: true })
  const files = {}
  for (const p in pages) {
    const name = getFileName(p)
    if (name) {
      files[name] = pages[p]
    }
  }
  return files
}

const getFileName = (path: string) => {
  // 组只需要加载页面文件,组件不需要
  if (path.indexOf('components') > 0) {
    return false
  }
  const pattern = /\/(\w*)\.vue/
  const matched = path.match(pattern)
  if (!matched) {
    throw new Error('path is not right:' + path)
  }
  // views/Analysis/index.vue这种情况
  // 这种情况直接变成Analysis:'views/Analysis/index.vue,直接寻找上一级文件夹名作为路由名字
  if (matched[1] === 'index') {
    const fileArr = path.split('/')
    const len = fileArr.length
    const routeName = fileArr[len - 2]
    return routeName
  }
  return matched[1]
}

export function genStore() {
  const module = import.meta.glob('/src/**/*.store.ts', { eager: true })
  const obj = {}
  Object.keys(module).forEach((item) => {
    const name = item.match(/(?<=\/)[a-zA-Z]+(?=\.)/g)![0]
    const content: StoreFile = module[item].default
    if (!content) {
      throw new Error('Please export default in ' + item)
    }
    Object.assign(obj, { [name]: content })
  })
  return obj
}
