'use strict';

const Controller = require('egg').Controller;

class SortsController extends Controller {
  async index() {
    const { ctx } = this;
    const get = ctx.query;
    get.limit = parseInt(get.limit);
    get.page = parseInt(get.page);
    get.offset = (get.page - 1) * get.limit;
    get.orders = [ 'sort' ];
    const count = await ctx.service.sortservice.querySorts();
    const data = await ctx.service.sortservice.querySorts(get);
    ctx.body = {
      code: 200,
      msg: '查询成功',
      count: count.length,
      data,
    };
  }
  async sortsAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    const res = await ctx.service.sortservice.addSorts(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '插入成功',
      };
    }
  }
  async sortsDelet() {
    const { ctx } = this;
    const param = ctx.params;
    const res = await ctx.service.sortservice.delSorts(param);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '删除成功',
      };
    }
  }
  async sortsUp() {
    const { ctx } = this;
    const put = ctx.request.body;
    const option = { where: { sid: put.sid } };
    delete put.sid;
    const res = await ctx.service.sortservice.upSorts(put, option);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '修改成功',
      };
    }
  }
}

module.exports = SortsController;
