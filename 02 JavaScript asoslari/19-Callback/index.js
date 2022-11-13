// callback
function first(cb) {
  setTimeout(() => {
    console.log(1);
    cb()
  }, 1000)
}
function second() {
  console.log(2);
}
first(second)
// second()