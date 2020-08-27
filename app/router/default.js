'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default', controller.default.home.index);
  router.get('/default/list', controller.default.home.list)
  router.get('/default/getArticleList', controller.default.home.getArticleList)
};
