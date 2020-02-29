'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async logon(data) {
    const res = await this.app.mysql.insert('user', data);
    return res;
  }
  async queryUser(data) {
    const res = await this.app.mysql.get('user', data);
    return res;
  }
  async seleUser(data = null) {
    const res = await this.app.mysql.select('user', data);
    return res;
  }
}

module.exports = UserService;
