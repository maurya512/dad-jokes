// bring elements from dom
const jokeEl = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')


btn.addEventListener('click', generateJoke)
generateJoke()

// function to generate a joke
function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config).then(res => res.json())
    .then(data => {
        // stores the joke from data 
        jokeEl.innerHTML = data.joke
    })
}