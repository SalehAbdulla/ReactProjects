type Human = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type PersonAndEmployeeType = Human & Employee;

const salehAbdulla = {
  name: "Saleh",
  age: 26,
  id: 202300540,
  title: "The Best EVER!!!!!!!!!!",
};

console.log(salehAbdulla.name);

// ---------------

// Union  let myVar: (string | string[]) =  "Saleh";

let password: string | number = "Saleh@123";

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  first: "SALEH",
  last: "ABDULLA",
  age: 26,
};

const items2: (number | string)[] = ["123", 1, 2, 3, "321"];
console.log(items2);

// String Litral 

let color: "red" | "Green" | "blue";
color = "red";
console.log(color);


// Numeric Literal Types

let number: 1 | 2 | 3;
number = 2;
console.log(number);

let isTrue: true;
isTrue = true;
console.log(isTrue);
