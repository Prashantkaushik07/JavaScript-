Question-1 Create a variable of type string and try to add a number to it.
// let a = "Prashant Kaushik"
// let b = 5;
// console.log(a + b );

Question-2 Use typeof operater to find the datatype of the string in last Question.
// let a = "Prashant Kaushik"
// let b = 5;
// console.log(a + b );
// console.log(typeof (a + b));

Question-3 Create a Const object in javascript can you change to it hold a number later.
// const person={
//     name:"Prashant",
//     rollno:132,
// }
// person=132 //Assignment to constant Variable

Question-4 Try to add a new key to the const object in problem 3 were you able to do it.
//  const person={
//      name:"Prashant",
//      rollno:132,
// }
// person[rollno=156];
// console.log(person);

Question-5 Create a program to create a word-meaning  Dictionary of 5 words.
// let Dictionary={
//     "adumbrate":"prefigure";
//     "denouement":"as of a drama";
//     "esculent":"suitable for use as food";
//     "garrulous":"talkative";
//     "nebulous":"cloudy or misty";

// }
// console.log(Dictionary);

Question-6 Access each value from the Dictionary created in problem 5 using its key.

// let Dictionary={
//     "adumbrate":"prefigure";
//     "denouement":"as of a drama";
//     "esculent":"suitable for use as food";
//     "garrulous":"talkative";
//     "nebulous":"cloudy or misty";

// }
// console.log(Dictionary.esculent);

Question-7 check a prime number.

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;


if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (number > 1) {

    
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}


else {
    console.log("The number is not a prime number.");
}
