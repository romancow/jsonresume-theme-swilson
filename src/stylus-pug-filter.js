const stylus = require('stylus')

const defaultOptions = {
	compress: true
}

module.exports = function(text, options) {
	const stylusOptions = { ...defaultOptions, ...options }
	return stylus.render(text, stylusOptions)
}
