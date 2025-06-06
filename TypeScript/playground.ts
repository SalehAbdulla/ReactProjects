//  This is called annotation ->   let myVar: type = value;

let myName: string = "Saleh";
console.log(myName);

let myNumber: number = 3838;
console.log(myNumber);

let neverGiveUp: boolean = true;
console.log(neverGiveUp);

// The most oooful type
let color: any = "teal";
color = 20;
color = true;
console.log(color);

function addOne(val: number) {
  return val + 1;
}

const powerMath = (x: number, y: number) => {
  return Math.pow(x, y);
};

const double = (x: number, y: number): number => x * y;
const result = double(5, 5);
console.log("The result is = ", result);

// I'm Providing a default value right here
function greet(person: string = "Saleh") {
  console.log("Hi, ", person);
}

greet();

function double1(val: number): number {
  return val * val;
}

const printMessage = (message: string): void => {
  console.log(`Your message is: ${message}`);
};

// a Never data type, rarly used

// 1) We use it for a function that always throw an error;
// 2) We use it for a function that has an infinite loop;
// 3) We use it for a variable that can never have a value;

// Function that always throw an Error
const throwError = (message: string): never => {
  throw new Error(message);
};

// Funcation has infinit loop
const infinitLoop = (): never => {
  while (true) {
    console.log("Marry Chrismiss");
  }
};

// 3) We use it for a variable that can never have a value;
let x: never;
function neverReturnSomething(): never {
  while (true) {

  }
}

x = neverReturnSomething();


