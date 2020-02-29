'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

// mysql
// eslint-disable-next-line eggache/no-override-exports
module.exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// egg-bcrypt 加盐
// eslint-disable-next-line eggache/no-override-exports
module.exports.bcrypt = {
  enable: true,
  package: 'egg-bcrypt',
};
// 验证
// eslint-disable-next-line eggache/no-override-exports
module.exports.validate = {
  enable: true,
  package: 'egg-validate',
};
// 鉴权
// eslint-disable-next-line eggache/no-override-exports
module.exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};
// 即时通讯
// socker.io
// eslint-disable-next-line eggache/no-override-exports
module.exports.io = {
  enable: true,
  package: 'egg-socket.io',
};
