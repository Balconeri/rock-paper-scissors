var result = "";
var playerPoints = 0;
var balcoPoints = 0;

/* let playerChoice = letterToChoice(prompt("Please enter r for rock, p for paper, s for scissor").toLowerCase());
let computerChoice = letterToChoice(Math.floor(Math.random() * 3));


console.log("Player: " + playerChoice);
console.log("Computer: " + computerChoice); */



game()


function letterToChoice(input){
    if (input == 0 || input == "r"){
        result += "R";
        return "ROCK";
    }
    else if (input == 1 || input == "p"){
        result += "P";
        return "PAPER";
    }
    else if (input == 2 || input == "s"){
        result += "S";
        return "SCISSORS";
    }
}




function game(){
    while (playerPoints < 3 && balcoPoints <3){

        result = "";

        let playerChoice = letterToChoice(prompt("Please enter r for rock, p for paper, s for scissor").toLowerCase());
        let computerChoice = letterToChoice(Math.floor(Math.random() * 3));
        
        switch (result){
            case "RP":
                console.log("Your rock gets beaten by my paper. I'll take that point!")
                balcoPoints ++;
                break;
            case "RS":
                console.log("Your rock wins against my scissors. Take this one!")
                playerPoints ++;
                break;
            case "PR":
                console.log("Your paper wraps my rock and that'll give you a point!")
                playerPoints ++;
                break;
            case "PS":
                console.log("Your paper gets cut into pieces by my scissors. Point for me!")
                balcoPoints ++;
                break;
            case "SR":
                console.log("Your scissors got smashed by my rock. My point!")
                balcoPoints ++;
                break;
            case "SP":
                console.log("Your scissors destroyed my paper. +1 for you, my friend!")
                playerPoints ++;
                break;
            default:
                console.log("That's a tie!")
                break;
        }

        console.log("Player: " + playerChoice);
        console.log("Computer: " + computerChoice);
        console.log("Playerpoints: " + playerPoints);
        console.log("BalcoPoints: " + balcoPoints)
    }

    if (playerPoints == 3) {
        console.log("You somehow managed to beat me.. Congratulations!")
    }
    else if (balcoPoints == 3) {
        console.log("Hah, I got you. I'm not surprised at all.. You can try to beat me anytime!")
    }
}

