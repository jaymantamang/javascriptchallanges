//chalalnge number 1

let favFilms = ["titanic", "johnwick", "transformer", "transporter", "saw"]
favFilms.push("movie1");
favFilms.push("movie2");

for (let i = 0; i < favFilms.length; i++) {
    console.table(favFilms[i]);
}

//challange number 2

let randomNumbers = [""];
for (let i = 0; i < 10; i++) {
    randomNumbers = Math.floor((Math.random()) * 100) + 1;
    console.log(randomNumbers)
}

// challange number 3

for (let i = 20; i >= 0; i--) {
    console.log([i]);
}

//challange number 4
let randomNumbers1 = [""];
for (let i = 0; i < 5; i++) {
    randomNumbers1 = Math.floor((Math.random()) * 50) + 1;

    if (randomNumbers1 % 5 == 0) {
        console.log(`${randomNumbers1} : is divisible by 5`)

    } else {

        console.log(`${randomNumbers1} : is  not divisible by 5`)
    }
}
