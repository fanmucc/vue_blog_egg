'use strict';

const Controller = require('egg').Controller;
// restful架构
class HomeController extends Controller {
  // 获取tag列表进行渲染
  async getTags () {
    const { ctx } = this
    let sql = `select type_name, id from label`
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


  async getList() {
    const { ctx } = this;
    const { page, limit, type } = ctx.request.body
    let sql
    if (type === 0 || type === undefined) {
      // `select *, (select type_name from label where id = type_id) as type_name from article limit ${(page - 1) * limit}, ${page * limit - 1}`
        sql = `select *, (select type_name from label where id = type_id) as type_name from article limit ${(page - 1) * limit}, ${page * limit - 1} `
    } else {
        sql = `select *, (select type_name from label where id = type_id) as type_name from article where type_id = ${type} limit ${(page - 1) * limit}, ${page * limit - 1} `
    }
    // 获取全部文章
    // let sql = `select * from article`
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

  // async gitTag () {
  //   const { ctx } = this
  //   // 根据不同标签id 返回响应标签的全部文章
  //   const tagId = ctx.query.id
  //   // console.log(ctx.request.body)  // 获取post参数
  //   // console.log(ctx.query)         // 获取get请求参数
  //   // console.log(ctx.params)        // 获取动态路由参数 /:id等
  //   const sql = `select * from article where type_id=${tagId}`
  //   const results = await this.app.mysql.query(sql)
  //   ctx.body = {
  //     results: {
  //       success: true,
  //       errorMsg: '',
  //       errorCode: ''
  //     },
  //     data: results
  //   }
  // }
}


module.exports = HomeController;
