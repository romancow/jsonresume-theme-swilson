const pug = require("pug")

module.exports = {
	render: function(resume) {
		return pug.renderFile("index.pug", resume)
	}
}