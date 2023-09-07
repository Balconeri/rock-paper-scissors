var result = "";
var playerPoints = 0;
var balcoPoints = 0;





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

function updateScreen(){
    document.getElementById("resultdiv").innerText = roundResult;
    document.getElementById("playerScore").innerText = playerPoints;
    document.getElementById("computerScore").innerText = balcoPoints;
    document.getElementById("final").innerText = resultado;
}

function game(playerClicked){
    if (playerClicked == "restart") {
        playerPoints = 0;
        balcoPoints = 0;
        updateScreen();
    }
    
    if (playerPoints < 3 && balcoPoints <3){

        var resultado = "";
        result = "";
        
        letterToChoice(playerClicked).toLowerCase();
        letterToChoice(Math.floor(Math.random() * 3));


        switch (result){
            case "RP":
                roundResult= "Your rock gets beaten by my paper. I'll take that point!"
                balcoPoints ++;
                break;
            case "RS":
                roundResult= "Your rock wins against my scissors. Take this one!"
                playerPoints ++;
                break;
            case "PR":
                roundResult= "Your paper wraps my rock and that'll give you a point!"
                playerPoints ++;
                break;
            case "PS":
                roundResult= "Your paper gets cut into pieces by my scissors. Point for me!"
                balcoPoints ++;
                break;
            case "SR":
                roundResult= "Your scissors got smashed by my rock. My point!"
                balcoPoints ++;
                break;
            case "SP":
                roundResult= "Your scissors destroyed my paper. +1 for you, my friend!"
                playerPoints ++;
                break;
            default:
                roundResult= "That's a tie!"
                break;
        }
        
            
            

    }

    if (playerPoints == 3) {
        resultado = "You somehow managed to beat me.. Congratulations!";
    }
    else if (balcoPoints == 3) {
        resultado = "Hah, I got you. I'm not surprised at all.. You can try to beat me anytime!";
    }

    updateScreen();

} 

