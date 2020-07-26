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

var randArray: number[] = [5,6,7,8];

for (var val in randArray) {
    document.write(val + "<br />")
}

var strArray: String[] = randArray.map(String);
for (var val of strArray) {
    document.write(val + "<br />");
}


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


