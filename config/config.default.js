/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598363122680_5031';

  // add your middleware config here
  config.middleware = [];
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.56.134.154',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '!QAZxsw2',
      // 数据库名
      database: 'blog',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // 跨域问题
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };
  config.cors = {
    origin: '*',    // 允许访问的接口   可以传入指定的接口如 http://localhost:3000
    credentials: false,  // 是否开启认证
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS'   // 请求接口的方式
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
