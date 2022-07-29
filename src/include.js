window.addEventListener('load', function() {
	new URLSearchParams(window.location.search).forEach((value, key) => {
		document.body.style.setProperty("--" + key, value)
	})
	document.body.classList.add('loaded')
})