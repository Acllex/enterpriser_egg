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
  async newsAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    const res = await ctx.service.newservice.addNews(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '插入成功',
      };
    }
  }
  async newsDelet() {
    const { ctx } = this;
    const del = ctx.params;
    const res = await ctx.service.newservice.delNews(del);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '删除成功',
      };
    }
  }
  async newsUp() {
    const { ctx } = this;
    const put = ctx.request.body;
    const option = { where: { id: put.id } };
    delete put.nid;
    const res = await ctx.service.newservice.upNews(put, option);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '修改成功',
      };
    }
  }
}

module.exports = NewsController;
