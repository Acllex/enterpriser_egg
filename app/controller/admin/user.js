'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const get = ctx.query;
    get.limit = parseInt(get.limit);
    get.page = parseInt(get.page);
    get.offset = (get.page - 1) * get.limit;
    const count = await ctx.service.userservice.seleUser();
    const data = await ctx.service.userservice.seleUser(get);
    ctx.body = {
      code: 200,
      msg: '查询成功',
      count: count.length,
      data,
    };
  }
}

module.exports = UserController;
