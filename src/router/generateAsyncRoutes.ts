import cloneDeep from 'lodash.clonedeep'

// 设置为单例模式避免多次生成影响效率
window.__hasGenConstantRouterComponents = undefined

export function convertRoutes(nodes) {
  if (!nodes) return null
  nodes = cloneDeep(nodes)
  let queue = Array.isArray(nodes) ? nodes.concat() : [nodes]
  while (queue.length) {
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      if (!node.children || !node.children.length) continue
      node.children.forEach((child) => {
        // 转化相对路径
        if (child.path[0] !== '/' && !child.path.startsWith('http')) {
          // 看不懂,但是目的是把 a:{path:b}转化成a/b这种path
          child.path = node.path.replace(/(\w*)[/]*$/, `$1/${child.path}`)
        }
      })
      queue = queue.concat(node.children)
    }
  }
  return nodes
}
