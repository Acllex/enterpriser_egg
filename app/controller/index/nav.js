'use strict';

const Controller = require('egg').Controller;

class NavController extends Controller {
  async index() {
    const { ctx } = this;
    const get = { orders: [ 'nsort' ] };
    const data = await ctx.service.navservice.queryNav(get);
    ctx.body = {
      code: 200,
      msg: '查询成功',
      data,
    };
  }
}

module.exports = NavController;
