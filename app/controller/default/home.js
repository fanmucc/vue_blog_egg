'use strict';

const Controller = require('egg').Controller;
// restful架构
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 获取全部文章
    let sql = `select * from article`
    const results = await this.app.mysql.query(sql)
    ctx.body = {
      results: {
        success: true,
        errorMsg: '',
        errorCode: ''
      },
      data: results
    }
  }
  async gitTag () {
    const { ctx } = this
    // 根据不同标签id 返回响应标签的全部文章
    const tagId = ctx.query.id
    // console.log(ctx.request.body)  // 获取post参数
    // console.log(ctx.query)         // 获取get请求参数
    // console.log(ctx.params)        // 获取动态路由参数 /:id等
    const sql = `select * from article where type_id=${tagId}`
    const results = await this.app.mysql.query(sql)
    ctx.body = {
      results: {
        success: true,
        errorMsg: '',
        errorCode: ''
      },
      data: results
    }
  }
}


module.exports = HomeController;
