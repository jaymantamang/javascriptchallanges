let age = 15;
if (age < 18) {
    console.log("sorry i can't serve you")
}
else {
    console.log("No problem, what would you like to drink?");
}


let password = "jaymantamang";

if (password.length >= 8) {
    console.log(password);
}
else {
    console.log("the password is to short");
}



let number = 18;
if (number % 3 == 0 || number % 5 == 0) {
    console.log("The number is divisible by 3 or 5");
}
else {
    console.log("the number is not divisible by 3 or 5");
}



let number1 = 22;
if (number1 % 3 == 0 && number1 % 5 == 0) {
    console.log("fizzbuzz")
}
else if (number1 % 3 == 0) {
    console.log("fizz");

}
else if (number1 % 5 == 0) {
    console.log("buzz");

}
else {
    console.log(number1);
}

