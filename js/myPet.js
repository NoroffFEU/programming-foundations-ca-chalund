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
    },
    whatIsFavoriteToy: function () {
        return myPet.favoriteToy.color + " " + myPet.favoriteToy.kind;
    },
};

//What is the favorite Toy?
console.log(myPet.whatIsFavoriteToy());



/*  User Interface
    Make favourite toy change color.
*/
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


