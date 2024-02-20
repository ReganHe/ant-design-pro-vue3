import * as base from './base';
import { Message } from './modal';

const s = 'ApiMessage.';

/**
 * 分页条件查询站内信列表
 *
 * **TAG:** 站内信服务； &nbsp;&nbsp; **PATH:** /1.0/message/get_paged；
 */
export const getPaged = base.createRequest<
  Message.getPaged.Options,
  Message.getPaged.Returns['data']
>(s + 'getPaged', (params) => ({ url: `/1.0/message/get_paged`, method: 'GET', params }));

/**
 * 查询未读站内信条数
 *
 * **TAG:** 站内信服务； &nbsp;&nbsp; **PATH:** /1.0/message/get_unread_count；
 */
export const getUnreadCount = base.createNoParamsRequest<Message.getUnreadCount.Returns['data']>(
  s + 'getUnreadCount',
  () => ({ url: `/1.0/message/get_unread_count`, method: 'GET' })
);

/**
 * 站内信已读
 *
 * **TAG:** 站内信服务； &nbsp;&nbsp; **PATH:** /1.0/message/message_read；
 */
export const messageRead = base.createRequest<
  Message.messageRead.Options,
  Message.messageRead.Returns['data']
>(s + 'messageRead', (data) => ({ url: `/1.0/message/message_read`, method: 'POST', data }));
