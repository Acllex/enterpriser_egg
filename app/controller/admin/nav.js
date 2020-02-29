'use strict';

const Controller = require('egg').Controller;

class NavController extends Controller {
  async index() {
    const { ctx } = this;
    const get = ctx.query;
    get.limit = parseInt(get.limit);
    get.page = parseInt(get.page);
    get.offset = (get.page - 1) * get.limit;
    get.orders = [ 'nsort' ];
    // token中的信息
    ctx.state.user;
    const count = await ctx.service.navservice.queryNav();
    const data = await ctx.service.navservice.queryNav(get);
    ctx.body = {
      code: 200,
      msg: '查询成功',
      count: count.length,
      data,
    };
  }
  async navAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    const res = await ctx.service.navservice.addNav(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '插入成功',
      };
    }
  }
  async navDelet() {
    const { ctx } = this;
    const param = ctx.params;
    const res = await ctx.service.navservice.delNav(param);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '删除成功',
      };
    }
  }
  async navUp() {
    const { ctx } = this;
    // const param = ctx.params;
    const put = ctx.request.body;
    const option = { where: { nid: put.nid } };
    delete put.nid;
    const res = await ctx.service.navservice.upNav(put, option);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '修改成功',
      };
    }
  }
}

module.exports = NavController;
