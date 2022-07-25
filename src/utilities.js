const MarkdownIt = require("markdown-it")
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

		markdown: (md => function(str) {
			return md.render(str ?? "")
		})(new MarkdownIt())
	}
}

module.exports = utilities
