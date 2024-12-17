//haetaan sivulta tarvittavat elementit
const timeleft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const squares = document.querySelectorAll(".square")

console.log(squares)

//alustetaan yleisiä muuttujia
let countdowntimer = null
let moveMole = null
let currenttime = 60
let hitpostition
let result = 0

//luodaan funktio alaspäin laskuriA VARTEN
function countdown () {
  currenttime--
  timeleft.innerHTML = currenttime

  if (currenttime === 0) {
    clearInterval(countdowntimer)
    clearInterval(moveMole)
  }
}

//luodaan funktion myyrän liikuttamista varten
function randomSquares () {

  //Poistetaan myyrä pelialueelta
squares.forEach((square) => {
  square.classList.remove("mole")
})



  let randomIndex = Math.floor(Math.random() *9)
  const randomsquare = squares[randomIndex]

  randomsquare.classList.add("mole")
  hitpostition = randomsquare.id


}

//luodaan jokaiselle neliölle tapahtumakuuntelija
squares.forEach((square) => {
 square.addEventListener("mousedown",() => {
  console.log("tapahtumakuuntelija laukesi")

  if(square.id === hitpostition) {
    result++
    score.innerHTML = result
    hitpostition = null
  }
 } ) 
})

//luodaan intervalli joka kutsuu countdown functiota sekunnin välein
countdowntimer = setInterval(countdown, 1000)

//luodaan intervalli myyrän liikuttamista varten
moveMole = setInterval(randomSquares, 500)