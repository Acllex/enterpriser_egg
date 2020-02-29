'use strict';

const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write;

class UploadController extends Controller {
  async upload() {
    const { ctx } = this;
    // 获取 steam
    const stream = await ctx.getFileStream();
    // 生成文件名
    const filename = Date.now() + '' + Number.parseInt(Math.random() * 10000) + path.extname(stream.filename);
    // 写入路径
    const target = path.join(this.config.baseDir, 'app/public/uploads/', filename);
    const writeStream = fs.createWriteStream(target);
    const data = `/public/uploads/${filename}`;
    try {
      // 写入文件
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      throw err;
    }
    ctx.body = data;
  }
}

module.exports = UploadController;
