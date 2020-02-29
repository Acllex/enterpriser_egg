'use strict';

const Service = require('egg').Service;

class NavService extends Service {
  async queryNav(data = null) {
    const { app } = this;
    const res = await app.mysql.select('nav', data);
    return res;
  }
  async addNav(data) {
    const { app } = this;
    const res = await app.mysql.insert('nav', data);
    return res;
  }
  async delNav(data) {
    const { app } = this;
    const res = await app.mysql.delete('nav', data);
    return res;
  }
  async upNav(data, option) {
    const { app } = this;
    const res = await app.mysql.update('nav', data, option);
    return res;
  }
}

module.exports = NavService;
