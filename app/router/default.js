'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/default', controller.default.home.getList);
  router.get('/default/tag', controller.default.home.getTags)
  router.post('/default/article', controller.default.home.gitAricle)
};
