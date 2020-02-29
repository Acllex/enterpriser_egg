'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {
  async index() {
    const { ctx } = this;
    const get = ctx.query;
    get.where = { from: get.from };
    delete get.from;
    const res = await ctx.service.bannerservice.queryBanner(get);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
}

module.exports = BannerController;
