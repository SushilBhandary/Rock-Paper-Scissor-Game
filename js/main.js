 

const userScore = document.querySelector('#userScoreVal')
const compScore = document.querySelector('#compScoreVal')
const resultUser = document.querySelector('#result-user-stat')
const resultComp = document.querySelector('#result-comp-stat')
const resultFinal = document.querySelector('#result-final-stat')
const rock = document.querySelector('#r')
const paper = document.querySelector('#p')
const scissor = document.querySelector('#s')

const value = {
    1 : "rock",
    2 : "paper",
    3 : "scissor"
}

rock.addEventListener('click', () => {
    desction(1)
    
})

paper.addEventListener('click', () => {
    desction(2)
})

scissor.addEventListener('click', () => {
    desction(3)
})

const desction = (userVal) => {
    let compVal = Math.floor(Math.random() * 3)+1
    resultUser.innerText = `User: ${value[userVal]}`
    resultComp.innerText = `Computer: ${value[compVal]}`
    if ( (userVal === 1 && compVal === 3 ) || (userVal === 2 && compVal === 1 ) || (userVal === 3 && compVal === 2 ) ) {
        userScore.innerText = parseInt(userScore.innerText)+1;
        resultFinal.innerText = `Winner: User`
    } else if ( (userVal === 1 && compVal === 2 ) || (userVal === 2 && compVal === 3 ) || (userVal === 3 && compVal === 1 ) ) {
        compScore.innerText = parseInt(compScore.innerText)+1;
        resultFinal.innerText = `Winner: Computer`
    } else {
        resultFinalinnerText = `Winner: Draw`
    }
}