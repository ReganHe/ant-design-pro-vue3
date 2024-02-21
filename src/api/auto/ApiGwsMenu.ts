import * as base from './base';
import { GwsMenu } from './modal';

const s = 'ApiGwsMenu.';

/**
 * 新增菜单
 *
 * **TAG:** 05.菜单管理服务； &nbsp;&nbsp; **PATH:** /mgr/menu/add；
 */
export const addMenu = base.createRequest<GwsMenu.addMenu.Options, GwsMenu.addMenu.Returns['data']>(
  s + 'addMenu',
  (data) => ({ url: `/mgr/menu/add`, method: 'POST', data })
);

/**
 * 获取所有菜单
 *
 * 将菜单以设备分组的静态树形式展现
 *
 * **TAG:** 05.菜单管理服务； &nbsp;&nbsp; **PATH:** /mgr/menu/get_as_tree；
 */
export const findStaticMenu = base.createNoParamsRequest<GwsMenu.findStaticMenu.Returns['data']>(
  s + 'findStaticMenu',
  () => ({ url: `/mgr/menu/get_as_tree`, method: 'GET' })
);

/**
 * 修改菜单
 *
 * **TAG:** 05.菜单管理服务； &nbsp;&nbsp; **PATH:** /mgr/menu/modify；
 */
export const modifyMenu = base.createRequest<
  GwsMenu.modifyMenu.Options,
  GwsMenu.modifyMenu.Returns['data']
>(s + 'modifyMenu', (data) => ({ url: `/mgr/menu/modify`, method: 'PUT', data }));

/**
 * 删除菜单
 *
 * **TAG:** 05.菜单管理服务； &nbsp;&nbsp; **PATH:** /mgr/menu/remove/{id}；
 */
export const removeMenu = base.createRequest<
  GwsMenu.removeMenu.Options,
  GwsMenu.removeMenu.Returns['data']
>(s + 'removeMenu', ({ id, ...params }) => ({
  url: `/mgr/menu/remove/${id}`,
  method: 'DELETE',
  params,
}));
