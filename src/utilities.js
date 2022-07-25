const md = require("markdown-it")()
const Sugar = require("sugar").extend()

Sugar.Object.defineInstanceAndStatic({
	isDefined: function(value) {
		return (value != null) || (value === null)
	}
})

Sugar.Array.defineInstanceAndStatic({
	compactJoin: function(items, separator) {
		return items
			.compact()
			.map('toString')
			.filter(item => !!item.length)
			.join(separator)
	}
})

const markdown = function(str) {
	return md.render(str ?? "")
}
markdown.inline = function(str) {
	return md.renderInline(str ?? "")
}

function utilities(resume) {
	return {
		...resume,

		has(key) {
			return Object.has(resume, key)
		},

		get(key, defaultValue) {
			const value = Object.get(resume, key)
			return Object.isDefined(value) ? value : defaultValue
		},

		isEmpty(key) {
			const value = Object.get(resume, key)
			return Object.isEmpty(value)
		},

		join(keys, separator = ", ") {
			return keys
				.map(key => Object.get(resume, key))
				.compactJoin(separator)
		},

		lowercase(str) {
			return (str ?? "")
				.toString()
				.toLowerCase()
		},

		dasherize(str) {
			return (str ?? "")
				.toString()
				.dasherize()
		},

		normalizedPhone: resume?.basics?.phone?.replace(
			/[^\d\+-]/g,
			(match) => [".", "_", ")"].includes(match) ? "-" : ""
		) ?? "",

		markdown
	}
}

module.exports = utilities
