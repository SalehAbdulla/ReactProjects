// 2 types of Arrays:
// We can use it, eaither by:
// 1- Using the square bracket notaion[] to indicate an array of a specific type;
// 2- Using the generic type Array<type> notation to indicate an array of a specific type;

const names: Array<string> = ["ME", "And ME", "And ME Again"];
names.map((element) => console.log(element));

const nums: number[] = [1, 2, 3, 4, 5, 6];
console.log(nums);

const items: Array<string> = [];
items.push("Ipad");

console.log(items);
const numList: Array<number> = [1, 2, , 3, 4, 5, 6, 7, 8];

//----- Nested Multi-Dimensional Array

const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

const tripleArray: number[][][] = [
  [
    [1, 2, 3, 4],
    [2, 3, 4, 5, 6],
  ],
  [
    [9, 8, 7, 6, 5],
    [5, 6, 4, 7, 3, 8],
  ],
];

console.log(matrix);
console.log(tripleArray);



// Objcts in TypeScript
// const objectName: (annotation) = {properties: value};

const personMe: {firstName: string, lastName: string, age: number} = {
  firstName: "Saleh",
  lastName: "Abdulla",
  age: 26,
}

console.log(personMe.firstName);
console.log(personMe.lastName);
console.log(personMe.age);
type Person = {
  firstName: string,
  lastName: string,
  age: number,
}

function printUser():Person {
  return personMe;
}


function printUserSaved():void {
  console.log(personMe);
}

printUserSaved();

// Optional Property

type UserType = {
  name: string;
  readonly email?: "none@none.com"; // Readonly to prevent changes.
}

const saleh: UserType = {name: "Saleh"};





