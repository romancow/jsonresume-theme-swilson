window.addEventListener('load', function() {
	document.body.classList.add('loaded')
})

document.addEventListener('DOMContentLoaded', function() {
	new URLSearchParams(window.location.search).forEach((value, key) => {
		document.body.style.setProperty("--" + key, value)
	})
})
