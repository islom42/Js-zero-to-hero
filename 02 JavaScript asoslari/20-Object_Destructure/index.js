const thief = {
  jacket: "black",
  height: 1.8,
  colors: {
    hair: "grey",
    type: "curly"
  }
}
let newObj = Object.keys(thief)
const {jacket, ...rest} = thief
console.log(rest);