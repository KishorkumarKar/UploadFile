require('rootpath')();
module.exports = function (app) {
  app.use('/fileUpload', require('controller/file'));
};
