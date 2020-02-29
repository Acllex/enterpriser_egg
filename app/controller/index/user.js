'use strict';

const Controller = require('egg').Controller;
const createRule = require('./validate');

class UserController extends Controller {
  async logon() {
    const { ctx } = this;
    ctx.validate(createRule, ctx.request.body);
    const post = ctx.request.body;
    const qres = await ctx.service.userservice.queryUser({ uname: post.uname });
    if (qres) {
      ctx.body = '用户名不能重复';
      return;
    }
    post.upassword = await ctx.genHash(post.upassword);
    const res = await ctx.service.userservice.logon(post);
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
    const qres = await ctx.service.userservice.queryUser({ uname: post.uname });
    if (!qres) {
      ctx.body = '用户名不存在';
      return;
    }
    const passres = await this.ctx.compare(post.upassword, qres.upassword);
    if (!passres) {
      ctx.body = '密码错误';
      return;
    }
    const token = app.jwt.sign({ id: qres.uid, uname: qres.uname }, app.config.jwt.secret);
    ctx.body = {
      code: 200,
      msg: '登录成功',
      token,
    };
  }
  async users() {
    const { ctx } = this;
    const token = ctx.state.user;
    const qres = await ctx.service.userservice.queryUser({ uid: token.id });
    delete qres.uid;
    delete qres.upassword;
    ctx.body = {
      code: 200,
      msg: '查询成功',
      data: qres,
    };
  }
}

module.exports = UserController;
