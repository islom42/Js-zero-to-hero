//array
const fruits = ["olma", "nok", "apelsin"]
const [olma, ...arg] = fruits
console.log(olma, 0);
const [hey, arg2] = arg
console.log(hey, arg2);