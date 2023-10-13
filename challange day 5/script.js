
//task 1

const person = {
    name: "jayman tamang",
    Age: "35",
    city: "watford"
}
console.log(person);

//task 2
person.favFilms = ["Titanic", "john wick", "transformer"];
console.log(person);

//task 3
const pet = {
    animal: "cat",
    name: "coco",
    eat: function (food) {
        return ` The ${this.name}  is a  ${this.animal} eating a ${food}.`;
    },
    drink: function (drink) {
        return `The ${this.name}  is a  ${this.animal} drinking  a ${drink}.`;

    }
}

console.log(pet.eat("cat food"));
console.log(pet.drink("water"));


// NESTED OBJECTS TASK
//Task 1
const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: {
        name: 'Engineering',
        location: 'Building A',
        supervisor: {
            name: 'Jane Smith',
            position: 'Engineering Manager'
        }
    }
}
console.log(employee.department.supervisor.name);

//Task 2
const library = {
    name: 'Public Library',
    location: 'City Center',
    books: [
        {
            id: 'B001',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            details: {
                genre: 'Fiction',
                year: 1925
            }
        },
        {
            id: 'B002',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            details: {
                genre: 'Fiction',
                year: 1960
            }
        }
    ]
};
console.log(library.books[0].title);
