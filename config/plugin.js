'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql: {
      enble: true,
      package: 'egg-mysql'
  },
  cors: {  // 配置跨域问题
    enable: true,
    package: 'egg-cors'
  }
};
