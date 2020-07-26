/*var myName: string = "Keshar Limbu";
var myAge: number = 41;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
document.write("My name is a " + typeof(myName));

const PI = 3.1416;
*/
/*
interface SuperHero {
    realName: String;
    superName: String;
}
var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}

document.write(superman.realName + " is " + superman.superName + "<br />");
*/
/*var employees: string[] = ["Bob", "Sally", "Santa"];
document.write(employees.toString());
*/
/*
interface SuperHero {
    realName: String;
    superName: String;
}

var superheroes: SuperHero[] = [];
superheroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
});

document.write(superheroes[0].realName + " is " + superheroes[0].superName)
*/
/*
let samplet = 123;

if (true){
    let samplet = 456;
}

document.write("samplet : " + samplet + "<br />")
*/
/*
var samplet = 123;

if (true){
    var samplet = 456;
}

document.write("samplet : " + samplet + "<br />")
*/

/*var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(val + "<br />");
}
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />");
}*/

/*
var getSum = function(num1: number, num2: number): number {
    return num1 + num2;
}

var theSum1:number = getSum(5,2);

document.write("5 + 2 = " + theSum1 + "<br \>");
*/
/*
var getDiff = function (num1: number, num2 = 2, num3?: number): number {
    if (typeof num3 !== "undefined"){
        return num1 - num2 - num3;
    }
    return num1 - num2;
}

document.write("5 - 4 = " + getDiff(5,4) + "<br />");
*/
/*
var sumAll = function(...nums: number[]): void {
    var sum = nums.reduce((a, b)=>a + b, 0);

    document.write("sum : " + sum + "<br />");
}

sumAll(1,2,3,4,5);
*/
/*
var addOne = (x)=> x + 1;
document.write("1 + 1 = " + addOne(1) + "<br />");
*/
/*class Animal {
    public favFood: string;
    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string){
        Animal.numOfAnimals++;
    }

    document.write(this.name + " is owned by " + this.owner);
}*/
/*
let countDownFrom = (num) => {
    if (num == 0) return;
    console.log(num);
    countDownFrom(num - 1);
}
*/
/*
let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' },
];

var animals = categories.filter(function(animal) {
    return animal.id === "animals";
})
var dogs = categories.filter(dog => dog.parent === 'dogs');
console.log(dogs);

var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

var isDog = (animal) => animal.species === 'dog';


console.log = animals.filter(isDog);
*/
//console.log(animals);
/*let makeTree = (categories, parent) => {
    let node = {};
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id))
    return node;
}

console.log(
    JSON.stringify(
        makeTree(categories, null)
    )
);*/

/*
var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
]

var totalAmount = orders.reduce(function(sum, order) {
    console.log("hello", sum, order);
    return sum + order.amount;
}, 0)
*/
var fs = require('fs');
//import fs from 'fs';
var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split("\r\n")
    .map(line => line.split("\t"))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers;
    }, {});
console.log("Output: ", JSON.stringify(output, null, 2));

var numbers = [1, 2, 3, 4];


numbers.reduce((total, num) => {
    num = num * 2;
    console.log("Hello:", num);

    return num;
}, 0);