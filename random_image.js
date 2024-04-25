let imgUrls = [
	"https://yaoying2012.github.io/random_image/1.jpg",
	"https://yaoying2012.github.io/random_image/2.jpg",
]

document.addEventListener("DOMContentLoaded", function() {
	function getRandomImage() {
	let randomIndex = Math.floor(Math.random() * imgUrls.length)
	return imgUrls[randomIndex]
}})