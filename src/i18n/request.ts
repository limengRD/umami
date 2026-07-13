import { getRequestConfig } from 'next-intl/server';
import zhCN from '../../public/intl/messages/zh-CN.json';

export default getRequestConfig(async () => {
  return {
    locale: 'zh-CN',
    messages: zhCN,
  };
});
