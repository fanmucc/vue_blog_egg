'use strict';

const Controller = require('egg').Controller;
// restful架构
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'api测试';
  }
  async getArticleList () {
    let sql = 'SELECT article.id as id ,' +
              'article.title as title ,' +
              'article.introduction as introduction ,' +
              'article.article_content as article_content,' +
              'article.addTime as addTime ,' +
              'article.view_count as view_count ,' +
              'type.type_name as typeName  ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id'
    const results = await this.app.mysql.query(sql)
    this.ctx.body = results
  }
  async list () {
    const { ctx } = this;
    ctx.body = ctx
  }
}


module.exports = HomeController;
