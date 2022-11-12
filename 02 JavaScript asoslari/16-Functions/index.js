let age = 30;
function sayHi(name) {
  let age = "function scope";
  console.log(age);
  return (`Hello my name is ${name}`);
}
console.log(age);
let result = sayHi("Islom")
console.log(result);