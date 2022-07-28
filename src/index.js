const pug = require("pug")
const stylus = require("../src/stylus-pug-filter.js")
const utilities = require("../src/utilities.js")

module.exports = {
	render(resume) {
		const options = { filters: { stylus }, ...utilities(resume) }
		return pug.renderFile("index.pug", options)
	}
}