require("babel-core/register");


const devServer = require('../build/webpack-dev-server'),
      config    = require('../config');

const port = config.default.get('webpack_port');

devServer.default.listen(port, 'localhost', function () {
  console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});
