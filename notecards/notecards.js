function flipCard() {
    
    if(isFrontside){
        isFrontside = false;
        reloadCard();
    }
    else {
        isFrontside = true;
        reloadCard();
    }
}

function setup(){
    x = document.getElementById("notecard-contents");
    notecardTop = document.getElementById("notecard-top");
    notecardCount = document.getElementById("notecard-count");
    console.log("Page has loaded.");
    reloadCard();
}

function reloadCard(){
    if(isFrontside){
        x.innerHTML = notecards[card_number].front;
        notecardTop.innerHTML = "FRONT";
    }
    else{
        x.innerHTML = notecards[card_number].back;
        notecardTop.innerHTML = "BACK";
    }
}

function previousCard(){
    if(card_number > 0){
        card_number = card_number - 1;
        reloadCard();
    }
    else
        return;
}

function nextCard(){
    if (card_number < notecards.length-1){
        card_number = card_number + 1;
        reloadCard();
    }
    else
        return;
}

document.addEventListener("DOMContentLoaded", function(){
    setup();
});

var notecards = [{
    front: "love",
    back: "an intense feeling of deep affection."
},
{
    front: "weakness",
    back: "the state or condition of lacking strength."
}   
];

var isFrontside = true;
var x; //notecard-contents object
var notecardTop; //holds the FRONT and BACK text for the notecard
var notecardCount; //holds the notecard count ex. 3/4
var card_number = 0; //tracks the current card # in the array