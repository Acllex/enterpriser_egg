'use strict';

const Controller = require('egg').Controller;
const createRule = require('./validate');

class LogonController extends Controller {
  async register() {
    const { ctx } = this;
    ctx.validate(createRule, ctx.request.body);
    const post = ctx.request.body;
    const qres = await ctx.service.logonservice.queryLogon({ aname: post.aname });
    if (qres) {
      ctx.body = '用户名不能重复';
      return;
    }
    post.apassword = await ctx.genHash(post.apassword);
    const res = await ctx.service.logonservice.register(post);
    if (res) {
      ctx.body = {
        code: 200,
        msg: '注册成功',
      };
    }
  }
  async login() {
    const { ctx, app } = this;
    ctx.validate(createRule, ctx.request.body);
    const post = ctx.request.body;
    const qres = await ctx.service.logonservice.queryLogon({ aname: post.aname });
    if (!qres) {
      ctx.body = '用户名不存在';
      return;
    }
    const passres = await this.ctx.compare(post.apassword, qres.apassword);
    if (!passres) {
      ctx.body = '密码错误';
      return;
    }
    const token = app.jwt.sign({ id: qres.aid, aname: qres.aname }, app.config.jwt.secret);
    ctx.body = {
      code: 200,
      msg: '登录成功',
      token,
    };
  }
}

module.exports = LogonController;
