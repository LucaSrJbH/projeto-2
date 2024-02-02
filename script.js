function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a imagem
  // subistiuir a imagem
  // se tiver light, mode, aducuonar imagem light
  // se tiver sem light mode manter a imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./gojo com oculos.webp")
  } else {
    img.setAttribute("src", "./icone do gojo.jpg")
  }
}

/*const switchButton = document.querySelector("#button-theme")

switchButton.addEventListener("click", (e) => {
	if (switchButton.classList.contains("sun")) {
		switchButton.classList.add("moon")
		switchButton.classList.remove("sun")
	} else if (switchButton.classList.contains("moon")) {
		switchButton.classList.remove("moon")
		switchButton.classList.add("sun")
	}
})*/
