'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    const get = ctx.query;
    get.limit = parseInt(get.limit);
    get.page = parseInt(get.page);
    get.offset = (get.page - 1) * get.limit;
    if (get.id) {
      get.where = { id: get.id };
      delete get.id;
    }
    const count = await ctx.service.newservice.queryNews();
    const data = await ctx.service.newservice.queryNews(get);
    ctx.body = {
      code: 200,
      msg: '查询成功',
      count: count.length,
      data,
    };
  }
}

module.exports = NewsController;
