const path = require('path')
const pug = require("pug")
const stylus = require('stylus')
const utilities = require("./utilities.js")

const filters = {
	stylus(text, options) {
		const stylusOptions = { compress: true, ...options }
		return stylus.render(text, stylusOptions)
	}
}

module.exports = {
	render(resume) {
		const template = path.join(__dirname, 'template.pug')
		const options = { filters, ...utilities(resume) }
		return pug.renderFile(template, options)
	}
}