'use strict';

const Service = require('egg').Service;

class NewService extends Service {
  async queryNews(data = null) {
    const { app } = this;
    const res = await app.mysql.select('info', data);
    return res;
  }
  async addNews(data) {
    const { app } = this;
    data.create_time = app.mysql.literals.now;
    data.up_time = app.mysql.literals.now;
    const res = await app.mysql.insert('info', data);
    return res;
  }
  async delNews(data) {
    const { app } = this;
    const res = await app.mysql.delete('info', data);
    return res;
  }
  async upNews(data, option) {
    const { app } = this;
    data.up_time = app.mysql.literals.now;
    const res = await app.mysql.update('info', data, option);
    return res;
  }
}

module.exports = NewService;
