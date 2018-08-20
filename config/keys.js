// key.js - detemrine which set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // return prod set of keys
  module.exports = require('./prod');
} else {
  // return dev set of keys
  // export keys retrived from the dev.js file
  module.exports = require('./dev');
}
