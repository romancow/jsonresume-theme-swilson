const md = require("markdown-it")({ html: true })
const Sugar = require("sugar").extend()

Sugar.Object.defineInstanceAndStatic({
	isDefined(value) {
		return (value != null) || (value === null)
	}
})

Sugar.Array.defineInstanceAndStatic({
	compactJoin(items, separator) {
		return items
			.compact()
			.map('toString')
			.filter(item => !!item.length)
			.join(separator)
	}
})

Sugar.Date.defineStatic({
	formatYears(start, end) {
		const years = Date.range(start, end).years()
		return (years < 1) ? null :
			years + ((years > 1) ? " years" : " year")
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

		formatWorkDate(dateStr) {
			if ((dateStr == null) || (/^\d{4}$/.test(dateStr)))
				return dateStr
			const date = Date.create(dateStr)
			return date.isValid() ?
				date.format("{Mon} {year}") :
				dateStr
		},

		markdown,

		normalizedPhone: resume?.basics?.phone?.replace(
			/[^\d\+-]/g,
			(match) => [".", "_", ")"].includes(match) ? "-" : ""
		) ?? "",

		workYears: Date.formatYears(
			resume.work.map('startDate').compact(true).min(),
			resume.work.map('endDate').compact(true).max()
		)
	}
}

module.exports = utilities
