const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id.toLowerCase();
    userChoiceDisplay.innerHTML=userChoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)+1
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
};

function getResult(){
if (computerChoice === userChoice){
    result = "its a draw 🤝"
}
if (computerChoice === 'rock' && userChoice === "paper"){
    result = "You won🎉"
}
if (computerChoice === 'rock' && userChoice === "scissor"){
    result = "You lost🥲"
}
if (computerChoice === 'scissor' && userChoice === "paper"){
    result = "You lost🥲"
}
if (computerChoice === 'scissor' && userChoice === "rock"){
    result = "You won🎉"
}
if (computerChoice === 'paper' && userChoice === "rock"){
    result = "You lost🥲"
}
if (computerChoice === 'scissor' && userChoice === "rock"){
    result = "You won🎉"
}
resultDisplay.innerHTML = result
};