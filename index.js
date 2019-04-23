module.exports = uglifyjs;

function uglifyjs ( code, options ) {
	options.fromString = true;
	options.outSourceMap = options.sourceMap !== false;

	return require( 'terser' ).minify( code, options );
}

uglifyjs.defaults = {
	accept: '.js',
	sourceMap: true
};
