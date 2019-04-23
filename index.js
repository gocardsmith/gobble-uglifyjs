var terser = require( 'terser' );
module.exports = uglifyjs;


function uglifyjs ( code, options ) {

  console.log(`terser Options: {}`, options);
  let minified  = terser.minify( code, options );
  return minified;
}

uglifyjs.defaults = {
  sourceMap: false
};
