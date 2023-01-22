const myPet = {
    type: "dog",
    nameOfPet: "Hjørdis",
    age: 2,
    dangerous: false,
    bestFriends: ["Lexi", "Tassen" , "Rango"],
    friendsAge: [6, 3, 8],

    favoriteToy: {
        kind: "ball",
        color: "purple",
        makesSound: false,
    }
}

//Log color on favorite toy.
console.log(myPet.favoriteToy.color);


// Make favourite toy change color.
var button = document.querySelector("button");
var circle = document.getElementById("changeMe");

function changeColor(){
    if (circle.style.background == "purple"){
        circle.style.background = "orange";
    } else {
        circle.style.background = "purple";
    }
}
button.onclick = changeColor;


// Find the total age of friends
var totalAge = myPet.friendsAge;

var sum = totalAge.reduce (function (a, b) {
    return  a+ b;
});

console.log(sum);
