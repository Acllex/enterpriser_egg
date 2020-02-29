'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const { app } = ctx;
    // ctx.socket.emit('res', 'connected!');
    const { token } = ctx.socket.handshake.query;
    const user = ctx.jwt.verify(token, app.config.jwt.secret);
    console.log(user);
    await next();
    // execute when disconnect.
    console.log('断开!');
  };
};
