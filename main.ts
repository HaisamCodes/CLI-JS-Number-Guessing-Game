// NUMBER GUESSING GAME
import inquirer from "inquirer";
const sysGenNo = Math.floor(Math.random() * 10 + 1);
let numTries : number = 3                                                                                                                                                                                              
interface AnswersType{
    userGuess : number
};

while(numTries>0){
const answers : AnswersType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message : "Guess Any Number from 1-10 "

    }
]);
console.log(`You have ${numTries-1}  attempt left `);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

if(answers.userGuess == sysGenNo ){
    console.log("Thats Genius! You Guessed The Right Number. Game Ends");
    numTries=0;
} else{
    console.log("You Guessed The Wrong One! Better luck next time");
    
}


numTries--;
}
