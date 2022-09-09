const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const results = document.querySelector("#results")
const winner = document.querySelector("#winner")


let playerScore = 0
let compScore = 0

const getComputerChoice = () =>{
    let compChoice = Math.floor(Math.random() *3 + 1)
    if(compChoice == 1){
        return 'rock'
    }else if(compChoice == 2){
        return 'paper'
    }else{
        return 'scissors'
    }
}


const playRound = (playerSelection,computerSelection) =>{
    const content = document.createElement('div')
    content.classList.add('content')
    if(playerSelection === computerSelection){
        playerScore++
        compScore++
        content.innerText = 'Its a Draw! You both chose ' + playerSelection
        results.appendChild(content)
    }else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            compScore++
            content.innerText = 'You lose! Paper covers rock!'
            results.appendChild(content)
        }else{
            playerScore++
            content.innerText = 'You won! Rock crushes scissors'
            results.appendChild(content)
        }
    }else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            compScore++
            content.innerText = 'You lose! Scissors cut paper'
            results.appendChild(content)
        }else{
            playerScore++
            content.innerText = 'You win! Paper covers rock!'
            results.appendChild(content)
        }
    }else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            compScore++
            content.innerText = 'You lose! Rock crushes scissors'
            results.appendChild(content)
        }else{
            playerScore++
            content.innerText = 'You win! Scissors cut paper!'
            results.appendChild(content)
        }
    }
}


rock.addEventListener('click', () =>{
    computerSelection = getComputerChoice()
    playerSelection = 'rock'
    playRound(playerSelection,computerSelection)
    if(playerScore == 5){
        const p = document.createElement('p')
        p.classList.add('winnertext')
        p.innerText = 'YOU WON! YOU BEAT THE COMPUTER'
        winner.appendChild(p)
        setTimeout(function(){ location.reload(); }, 3000);
    }else if(compScore == 5){
        const p = document.createElement('p')
        p.classList.add('winnertext')
        p.innerText = 'YOU SUCK, YOU LOST TO THE COMPUTER'
        winner.appendChild(p)
        setTimeout(function(){ location.reload(); }, 3000);
    }
})

const p = document.createElement('p')
p.classList.add('winnertext')

paper.addEventListener('click', () =>{
    computerSelection = getComputerChoice()
    playerSelection = 'paper'
    playRound(playerSelection,computerSelection)
    if(playerScore == 5){
        p.innerText = 'YOU WON! YOU BEAT THE COMPUTER'
        winner.appendChild(p)
        setTimeout(function(){ location.reload(); }, 3000);
    }else if(compScore == 5){
        p.innerText = 'YOU SUCK, YOU LOST TO THE COMPUTER'
        winner.appendChild(p)
        setTimeout(function(){ location.reload(); }, 3000);
    }
})

scissors.addEventListener('click', () =>{
    computerSelection = getComputerChoice()
    playerSelection = 'scissors'
    playRound(playerSelection,computerSelection)
    if(playerScore == 5){
        p.innerText = 'YOU WON! YOU BEAT THE COMPUTER'
        winner.appendChild(p)
        setTimeout(function(){ location.reload(); }, 3000);
    }else if(compScore == 5){
        p.innerText = 'YOU SUCK, YOU LOST TO THE COMPUTER'
        winner.appendChild(p)
        setTimeout(function(){ location.reload(); },3000);
        
    }
})
