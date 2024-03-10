var output = [];
var count = 1;
function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    }
    
    else {
        output.push(count);
    }
    
    count++;

    console.log(output);
}




function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";

}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);




var output = [];
var count = 1;
function fizzBuzz() {
    while (count <= 100) {
    
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    }
    
    else {
        output.push(count);
    }
    
    count++;

    }

    console.log(output);
}




var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWorld = "bottle";
    if (numberOfBottles === 1) {
        bottleWorld = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWorld + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWorld + " of beer,");
    console.log("Take one down, pass it around,");
     numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWorld + " of beer on the wall.");
}