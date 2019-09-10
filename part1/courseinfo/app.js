// //variables
// const x = 1
// let y = 5

// console.log(x, y)   // 1, 5 are printed
// //a+=b; short hand notation
// //a=a+b
// y += 10
// //y=y+10
// console.log(x, y)   // 1, 15 are printed
// y = 'sometext'
// console.log(x, y)   // 1, sometext are printed
// //x = 4
// //Arrays

// const t = [1, -1, 3]

// t.push(5)
// //[1,-1,3,5]

// console.log(t.length) // 4 is printed
// t.pop()
// console.log(t) //[1,-1,3]
// //t[0]=1
// //t[1]=-1
// //t[2]=3
// console.log(t[1])   //1 
// /*
// t.forEach(value => {
//   console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
// })*/
// const newArray = [1, 2, 3, 3, 4, 5, 6, 7];
// newArray.forEach(function (val, index) { val = val * 2; console.log('index=', index, 'value=', val) });
// // newArray.shift();
// // console.log(newArray);
// //arrayVariable.foreach(callback); takes callback function/method as an argument
// t2 = t.concat(666);
// console.log('t ', t);
// console.log('t2 ', t2)

// //example of destructring
// const someArray = [7, 4, 8, 1, 3, 99];
// let firstElement = someArray[0];
// let secondElement = someArray[1]; //....and so on
// //but using estructring
// const [first, second, third, ...remaining] = someArray;
// console.log('first ', first, 'second ', second, 'third ', third);
// console.log(remaining);
// //console.log(second)

//Objects
const obj1 = {
    name: 'poonam',
    age: 25,
    otherObject: {
        partner: 'pankaj',
        age: 24,
        deepObject: {
            greeting: 'hello'
        }
    },
    'wierd property': 'I am wired'
};
//dot notation
// console.log(obj1.name);
// console.log(obj1.age);
// console.log(obj1);
// console.log(obj1.otherObject.partner);
//using square brackets
// console.log(obj1['name']);
// console.log(obj1['otherObject']['age']);
// console.log(obj1['otherObject']['deepObject']['greeting']);
// obj1.gender = 'female';
// //obj1["wierd property"]
// console.log(obj1);
// obj1['laguages'] = ['hindi', 'english', 'punjabi'];
// console.log(obj1);

//functions or methods
/*
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
console.log(sum(6, 7));
// const multiply = (c1, c2) => {  
//     return c1 * c2
// }
const multiply = (c1, c2) => c1 * c2

//in ES5 var multiply= function(c1,c2){return c1*c2}
console.log(multiply(8, 6));

const square = x => x * x
console.log(square(8));
const double = x => 2 * x
const myArray = [5, 6, 3, 67, 89, 22233, 6789]
console.log(myArray.map(square))
console.log(myArray.map(double));
console.log(myArray);*/
//new object property creation
const newObj = {
    name: 'poonam'
}
//newObj.name
newObj.age = '25';
newObj['Gender'] = 'female';
//console.log(newObj);
// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//     greet: () => {
//         console.log('hello, my name is', this.name)
//     },
//     doAddition: function (a, b) {
//         console.log(a + b)
//     },
// }

// arto.doAddition(1, 4)        // 5 is printed

// const referenceToAdditon = arto.doAddition
// const poonamAddMethod = arto.doAddition;
// poonamAddMethod(4, 5);
// const poonamsGreet = arto.greet;
// //arto.greet();
// //poonamsGreet();
// //referenceToAdditon(10, 15)   // 25 is printed
// setTimeout(arto.greet.bind(arto), 1000)

//classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Namaste', this.name);
    }
}
const poonam = new Person('Poonam', 1);
poonam.greet();

const pankaj = new Person('Panakj', 5);
pankaj.greet();
