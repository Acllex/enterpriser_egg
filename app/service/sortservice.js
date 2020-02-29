'use strict';

const Service = require('egg').Service;

class SortService extends Service {
  async querySorts(data = null) {
    const { app } = this;
    const res = await app.mysql.select('sorts', data);
    return res;
  }
  async addSorts(data) {
    const { app } = this;
    const res = await app.mysql.insert('sorts', data);
    return res;
  }
  async delSorts(data) {
    const { app } = this;
    const res = await app.mysql.delete('sorts', data);
    return res;
  }
  async upSorts(data, option) {
    const { app } = this;
    const res = await app.mysql.update('sorts', data, option);
    return res;
  }
}

module.exports = SortService;
