//Users enter a max number and then tries to guess the numbr from 1 to max.

const max = prompt("Enter your Max number:") ;

const random = Math.floor(Math.random() * max) + 1 ;
let guess = prompt("Guess the number:") ;

while(true)
{
    if(guess == "quit")
    {
        break ;
    }

    if(guess == random)
    {
        console.log("Congrats!You guessed it right!The number was", random) ;
    }
    else
    {
        console.log("Guesses Wrong!PLease try again!") ;
    }
}
