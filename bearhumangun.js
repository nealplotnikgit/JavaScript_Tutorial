'use strict'
const bear = 'bear';
const human = 'human';
const gun = 'gun';


function getUserChoice(userInput){
    var choice = userInput.toLowerCase();
    if (choice == bear || choice == gun || choice == human){
        return choice;
    } else {
        console.log("shitty entry");
    }
}

var getComputerChoice = function(){
    var choice = Math.floor(Math.random()*3);
    if (choice == "0"){
        return gun;
    } else if (choice == '1'){
        return human;
    } else {
        return bear;
    }
}

function determineWinner(userChoice, computerChoice){
    const userwins = "User wins";
    const computerwins = "Computer wins";
    const tiegame = 'Tie game';
        
    if (userChoice == computerChoice){
        return tiegame;
    }
    if (userChoice == bear){
        if (computerChoice == human){ 
            return userwins; //bear eats human
        } else {
            return computerwins; //gun shoots bear
        }
    } else if (userChoice == human) {
        if (computerChoice == bear){
            return computerwins; //bear eats human
        } else {
            return userwins; // human disarms gun
        }
    } else {// user chooses gun
        if (computerChoice == human){
            return computerwins; //human disarms gun
        } else {
            return userwins; // gun shoots bear
        }
    }
}

function playGame(){
    var promptUserChoice = human; //prompt doesnt work outside browser
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    var winner = determineWinner(userChoice,computerChoice);
    console.log(winner);
}

playGame();

/*
var x = getUserChoice("bear");
console.log(x);
var x = getUserChoice("Bert");
console.log(x);
var x = getUserChoice("BEAR");
console.log(x);
var x = getUserChoice("human");
console.log(x);
var x = getUserChoice("gun");
console.log(x);
for (i = 0; i < 100; i++){
console.log(getComputerChoice());
}

console.log(determineWinner("human",'bear'));
console.log(determineWinner("human",'gun'));
console.log(determineWinner("human",'human'));
console.log(determineWinner("bear",'bear'));
console.log(determineWinner("bear",'human'));
console.log(determineWinner("bear",'gun'));
console.log(determineWinner("gun",'gun'));
console.log(determineWinner("bear",'gun'));
console.log(determineWinner("human",'gun')); */