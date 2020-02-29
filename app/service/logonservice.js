'use strict';

const Service = require('egg').Service;

class LogonService extends Service {
  async register(data) {
    const res = await this.app.mysql.insert('admin', data);
    return res;
  }
  async queryLogon(data) {
    const res = await this.app.mysql.get('admin', data);
    return res;
  }
}

module.exports = LogonService;
