Hooks.once('init', async function () {
   console.log("_________marvel style__________")

});


Hooks.on('renderPause', () => {
   let pause = document.getElementById("pause");
   let imgPause = pause.querySelector("img");
   imgPause.src = "modules/csb-batman-style/assets/img/bgcc_logo.webp"
   imgPause.style.animation = "none"
   imgPause.style.top = "-5rem"
   imgPause.style.opacity = "1"

   pause.querySelector("figcaption").innerHTML = "Tout semble calme à Gotham City"
})