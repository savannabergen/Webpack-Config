import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing-emoji.svg'

const laughImg = document.getElementById('laugh-img')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
