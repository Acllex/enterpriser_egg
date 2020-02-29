'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt, io } = app;
  router.get('/', controller.home.index);
  // admin
  router.post('/admin/register', controller.admin.logon.register);
  router.post('/admin/login', controller.admin.logon.login);
  // admin导航管理
  router.get('/admin/nav', jwt, controller.admin.nav.index);
  router.post('/admin/nav', jwt, controller.admin.nav.navAdd);
  router.del('/admin/nav/:nid', jwt, controller.admin.nav.navDelet);
  router.put('/admin/nav/:id', jwt, controller.admin.nav.navUp);
  // admin新闻分类管理
  router.get('/admin/sorts', jwt, controller.admin.sorts.index);
  router.post('/admin/sorts', jwt, controller.admin.sorts.sortsAdd);
  router.del('/admin/sorts/:sid', jwt, controller.admin.sorts.sortsDelet);
  router.put('/admin/sorts/:id', jwt, controller.admin.sorts.sortsUp);
  // admin新闻管理
  router.get('/admin/news', jwt, controller.admin.news.index);
  router.post('/admin/news', jwt, controller.admin.news.newsAdd);
  router.del('/admin/news/:id', jwt, controller.admin.news.newsDelet);
  router.put('/admin/news/:id', jwt, controller.admin.news.newsUp);
  // admin用户查看
  router.get('/admin/user', jwt, controller.admin.user.index);
  // admin的banner
  router.get('/admin/banner', jwt, controller.admin.banner.index);
  router.post('/admin/banner', jwt, controller.admin.banner.bannerAdd);
  router.del('/admin/banner/:bid', jwt, controller.admin.banner.bannerDelet);
  router.put('/admin/banner/:bid', jwt, controller.admin.banner.bannerUp);
  // index
  router.post('/index/logon', controller.index.user.logon);
  router.post('/index/login', controller.index.user.login);
  router.get('/index/users', jwt, controller.index.user.users);
  router.get('/index/nav', controller.index.nav.index);
  router.get('/index/banner', controller.index.banner.index);
  router.get('/index/news', controller.index.news.index);
  // io
  io.of('/').route('chat', io.controller.chat.ping);

  // upload
  router.post('/upload', jwt, controller.api.upload.upload);
};
