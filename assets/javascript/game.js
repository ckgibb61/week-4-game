$(document).ready(function (){
    console.log("ready")

computerChoices = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79","80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];

var minersGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(minersGuess);

var wins = 0;
var losses = 0;
var yourScore = 0;

var gemsValue1 = 1 + Math.floor(Math.random() * 12);;
var gemsValue2 = 1 + Math.floor(Math.random() * 12);;
var gemsValue3 = 1 + Math.floor(Math.random() * 12);;
var gemsValue5 = 1 + Math.floor(Math.random() * 12);;


function reset() {
    minersGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    $("#miners").html(minersGuess);
    gemsValue1 = 1 + Math.floor(Math.random() * 12);;
    gemsValue2 = 1 + Math.floor(Math.random() * 12);;
    gemsValue3 = 1 + Math.floor(Math.random() * 12);;
    gemsValue5 = 1 + Math.floor(Math.random() * 12);;
    yourScore = 0;
    $("#score").html(yourScore);
};


function startGame() {
    $("#score").html(yourScore);
    $("#miners").html(minersGuess);

    $("#gone").on("click", function(){
        console.log("gone");
        yourScore = yourScore + gemsValue1;
        $("#score").html(yourScore);
       
        if (yourScore == minersGuess) {
            console.log("winner");
            alert("Winner! Don't spend it all in one place!");
            wins++;
            $("#win").html(wins);
            reset();
        }
        else if (yourScore > minersGuess) {
            console.log("loser");
            alert("Loser's don't get gems!");
            losses++;
            $("#lose").html(losses);
            reset();
        };
    });

    $("#gtwo").on("click", function(){
        console.log("gtwo");
        yourScore = yourScore + gemsValue2;
        $("#score").html(yourScore);  
       console.log("yourScore", typeof yourScore);
        if (yourScore > minersGuess) {
            console.log("loser");
            alert("Loser's don't get gems!");
            losses++;
            $("#lose").html(losses);
            reset();
        }
        else  if (yourScore == minersGuess) {
            console.log("winner");
            alert("Winner! Don't spend it all in one place!");
            wins++;
            $("#win").html(wins);
            reset();
        };
        
    });  

    $("#gthree").on("click", function(){
        console.log("gthree");
        yourScore = yourScore + gemsValue3;
        $("#score").html(yourScore);  
       
        if (yourScore == minersGuess) {
            console.log("winner");
            alert("Winner! Don't spend it all in one place!");
            wins++;
            $("#win").html(wins);
            reset();
        }
        else if (yourScore > minersGuess) {
            console.log("loser");
            alert("Loser's don't get gems!");
            losses++;
            $("#lose").html(losses);
            reset();
        };
    });  

    $("#gfive").on("click", function(){
        console.log("gfive");
        yourScore = yourScore + gemsValue5;
        $("#score").html(yourScore);  

        if (yourScore == minersGuess) {
            console.log("winner");
            alert("Winner! Don't spend it all in one place!");
            wins++;
            $("#win").html(wins);
            reset();
        }
        else if (yourScore > minersGuess) {
            console.log("loser");
            alert("Loser's don't get gems!");
            losses++;
            $("#lose").html(losses);
            reset();
        };
    });  


};
startGame();
});
