const pug = require("pug")
const stylus = require('stylus')
const utilities = require("../src/utilities.js")

const filters = {
	stylus(text, options) {
		const stylusOptions = { compress: true, ...options }
		return stylus.render(text, stylusOptions)
	}
}

module.exports = {
	render(resume) {
		const options = { filters, ...utilities(resume) }
		return pug.renderFile("index.pug", options)
	}
}