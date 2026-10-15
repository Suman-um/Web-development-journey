// User enters a max number and then tries to
// guess the number from 1 to max.

const max = Number(prompt("Enter your Max number:"));

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number:");

while(true)
{
    
    if(guess == "quit")
    {
        console.log("You quit the game!");
        break;
    }

    // Convert guess from String to Number
    guess = Number(guess);

    // Correct guess
    if(guess === random)
    {
        console.log(
            "Congrats! You guessed it right! The number was",
            random
        );
        break;
    }

    // Guess is smaller
    else if(guess < random)
    {
        guess = prompt(
            "Number is too small. Try a larger number."
        );
    }

    // Guess is larger
    else
    {
        guess = prompt(
            "Number is too large. Try a smaller number."
        );
    }
}