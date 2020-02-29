'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {
  async index() {
    const { ctx } = this;
    const get = ctx.query;
    get.limit = parseInt(get.limit);
    get.page = parseInt(get.page);
    get.offset = (get.page - 1) * get.limit;
    // token中的信息
    ctx.state.user;
    const count = await ctx.service.bannerservice.queryBanner();
    const data = await ctx.service.bannerservice.queryBanner(get);
    ctx.body = {
      code: 200,
      msg: '查询成功',
      count: count.length,
      data,
    };
  }
  async bannerAdd() {
    const { ctx } = this;
    const post = ctx.request.body;
    const res = await ctx.service.bannerservice.addBanner(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '插入成功',
      };
    }
  }
  async bannerDelet() {
    const { ctx } = this;
    const param = ctx.params;
    const res = await ctx.service.bannerservice.delBanner(param);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '删除成功',
      };
    }
  }
  async bannerUp() {
    const { ctx } = this;
    // const param = ctx.params;
    const put = ctx.request.body;
    const option = { where: { bid: put.bid } };
    delete put.bid;
    const res = await ctx.service.bannerservice.upBanner(put, option);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '修改成功',
      };
    }
  }
}

module.exports = BannerController;

