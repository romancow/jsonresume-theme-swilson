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

		has: function(key) {
			return Object.has(resume, key)
		},

		get: function(key, defaultValue) {
			const value = Object.get(resume, key)
			return Object.isDefined(value) ? value : defaultValue
		},

		join: function(keys, separator = ", ") {
			return keys
				.map(key => Object.get(resume, key))
				.compactJoin(separator)
		},

		lowercase(str) {
			return ((str == null) ? "" : str)
				.toString()
				.toLowerCase()
		},

		normalizedPhone: resume?.basics?.phone?.replace(
			/[^\d\+-]/g,
			(match) => [".", "_", ")"].includes(match) ? "-" : ""
		) ?? ""
	}
}

module.exports = utilities
