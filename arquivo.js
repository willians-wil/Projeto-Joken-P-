const result = document.querySelector(".result")//Parte 9
const humanScore = document.querySelector ("#human-score")//Parte 10
const machineScore = document.querySelector ("#machine-score") //Parte 11

let humanScoreNumber = 0 //Parte 12 //Irá contar quantos pontos eu fiz
let machineScoreNumber = 0 //Parte 13 //Irá contar quantos pontos a máquina fez
 
/*
ENUMs = Quando houver vários arquivos de JavasCript se precisar trocar algo, não terá a necessida de trocar palavra por palavra com o uso do Enun

humaScoreNumber: Camel Case = a corcunda de um camelo que seria a letra em maiúscula nessa variável
GAME_OPTIONS: snake Case =  a separação das palavras e feita por underline que simboliza uma cobra
*/

const GAME_OPTIONS ={
    Rock: "rock",           //Sem o uso do Enum na variável const choices, exemplo abaixo = ["Rock", "Paper", "Scissors"]
    Paper: "paper",
   Scissors: "scissors"
}


const playHuman = (humanchoice) => { //Arrow function (Modelo)  1 A ESCOLHA DO USUÁRIO
    //console.log (humanchoice)
    playTheGame(humanchoice, playMachine()) //Quem vai chamar o playTheGame é o playHuman, que é a escolha do humano mais a escolha da máquina

    //console.log ('retorno ' + playMachine()) // Parte 5 - Esse console.log seria para confirmar que as três opçoes quando clico aparecerá Paper no return [1] abaixo
}
const playMachine = () => { //2 Escolha da máquina (Não vai precisar receber informação nehuma , ela só vai ter que retornar o que a máquina escolheu)
    const choices = [GAME_OPTIONS.Rock, GAME_OPTIONS.Paper, GAME_OPTIONS.Scissors] //Parte 3 - Variável choice (escolha) entre pedra, papel e tesoura

    const randomNumber = Math.floor(Math.random() * 3)  //Parte 6 (Vezes três que retornará para mim 0,1 ou 2) e o flor é o que arredonda o número par abaixo se o resultado for 2.9, arredonda para 2
    //console.log (randomNumber)
    return choices[randomNumber] //Parte 4 choice [2} Retorna para mim a opção Paper, pois 0 seria Rock, depois da variável criada randomNumber coloco no lugar do 2 para ele retornar em texto rock, paper ou scissors 
}

const playTheGame = (human, machine) => { //Parte 7 Essa função irá verifica quem ganhou se Humano ou a Máquina  que são os dois valores
    console.log("Humano: " + human + "maquina: " + machine)

    if (human === machine) { //Parte 8 com o if iremos colocar na tela quando houver empate
        result.innerHTML = '<img src="./assets/emoticon-1610228_640.png" width="70px">';
    } else if ((human === GAME_OPTIONS.Paper && machine === GAME_OPTIONS.Rock) || //O ElseiF é usado quando existe uma condição
               (human === GAME_OPTIONS.Rock && machine === GAME_OPTIONS.Scissors) ||
               (human === GAME_OPTIONS.Scissors && machine === GAME_OPTIONS.Paper)) { //Parte 10 As três jogadas mostram que eu ganho com ElseIf
        
        humanScoreNumber++ //Parte 14 Toda vez que eu ganhar eu adiciono mais um, depois disso eu coloco dentro do meu humanScore ex: linha abaixo
        humanScore.innerHTML = humanScoreNumber //Parte 15 
        result.innerHTML = '<img src="./assets/emoticon-1610518_640.png" width="70px">'

    } else {
        machineScoreNumber++ //Toda vez que a Alexa ganhar adiciona mais um
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML ='<img src="./assets/emoticon-1669804_640.png" width="70px">'; //Se eu não ganhar e nem der empate a máquina , Alexa ganha
    }
}
