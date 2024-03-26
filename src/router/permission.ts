export function hasPermission(permission, route) {
  if (route.meta && route.meta.permission) {
    return route.meta.permission.some((s) => permission.includes(s))
  }
  return true
}

export function filteRouterPermission(routerMap, permission) {
  const accessedRouters = routerMap.filter((route) => {
    if (hasPermission(permission, route)) {
      if (route.children && route.children.length) {
        route.children = filteRouterPermission(route.children, permission)
      }
      return true
    }
    return false
  })
  return accessedRouters
}
