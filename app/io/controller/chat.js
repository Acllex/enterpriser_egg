'use strict';

const Controller = require('egg').Controller;

class ChatController extends Controller {
  async ping() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0];
    await nsp.emit('res', message);
  }
}

module.exports = ChatController;
