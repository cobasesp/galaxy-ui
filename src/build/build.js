var buildify = require('buildify');
 
buildify()
  .concat(['./src/js/navbar.js'])
  .wrap('./src/build/template.js', { version: '1.0' })
  .save('./dist/js/galaxy-bundle.dev.js')
  .uglify()
  .save('./dist/js/galaxy-bundle.min.js');