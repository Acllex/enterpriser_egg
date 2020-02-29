'use strict';

const Service = require('egg').Service;

class BannerService extends Service {
  async queryBanner(data = null) {
    const { app } = this;
    const res = await app.mysql.select('banner', data);
    return res;
  }
  async addBanner(data) {
    const { app } = this;
    const res = await app.mysql.insert('banner', data);
    return res;
  }
  async delBanner(data) {
    const { app } = this;
    const res = await app.mysql.delete('banner', data);
    return res;
  }
  async upBanner(data, option) {
    const { app } = this;
    const res = await app.mysql.update('banner', data, option);
    return res;
  }
}

module.exports = BannerService;

