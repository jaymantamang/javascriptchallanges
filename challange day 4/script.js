//task 1
function greet(name) {
    console.log(`Hello and Good Morning ${name}`);
}
greet("jayman");

//task 2

function oddEven(num) {
    if (num % 2 === 0) {
        console.log(`The number:${num} is even`);
    }
    else {
        console.log(`The number:${num} is odd`);
    }
}
oddEven(5);

//task 3




function withDraw(pin, balance) {
    let accountBalance = 10000;
    let storedPin = 3421;

    if (pin === storedPin) {
        if (accountBalance >= balance) {
            return "Transaction approved and TAKE YOUR CASH!!!";
        }
        else {

            return "Transaction Denied!! Insufficient Funds";
        }
    } else {
        return "Incorect Pin"
    }

}

withDraw(3421, 5000);
