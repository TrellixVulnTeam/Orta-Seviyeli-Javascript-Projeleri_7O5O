let images = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
]
let dice = document.querySelectorAll("img");


function roll() {


    let diceOneVal = Math.floor(Math.random() * 6);
    let diceTwoVal = Math.floor(Math.random() * 6);


    document.getElementById("die1").setAttribute("src", images[diceOneVal]);
    document.getElementById("die2").setAttribute("src", images[diceTwoVal]);

    document.getElementById("total").innerText = "Your Roll is :" + ((diceOneVal + 1) + (diceTwoVal + 1));

}