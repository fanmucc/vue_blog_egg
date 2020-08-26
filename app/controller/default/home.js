'use strict';

const Controller = require('egg').Controller;
// restful架构
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eggs123';
  }
  async list () {
    const { ctx } = this;
    ctx.body = ctx
  }
}


module.exports = HomeController;
