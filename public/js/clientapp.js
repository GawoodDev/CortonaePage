const $emailForm = document.querySelector("#emailServerForm")

$emailForm.addEventListener("submit", (e)=> {
	e.preventDefault()
	let lastscroll = window.scrollY
	$emailForm.submit()
})

window.scrollBy({
	top: 200,
	left: 0,
	behavior: "auto"
})
