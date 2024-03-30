/*// ! call(), apply(), bind();
 let myName = {
  firstName: "Lingaraj",
  lastName: "Hosur",
}

let printFullName = function(city, state, nighoubour) {
  console.log(`My name is ${this.firstName} ${this.lastName} im from ${city} ${state} ${nighoubour}`);
}

let name2 = {
  firstName: "Anand",
  lastName: "Kumar"
}


// printFullName.apply(name2, ["chitradurga", "karnataka"]);

let address = printFullName.bind(myName, "chitradurga", "Karanata");
address("China");

Function.prototype.myBind = function(...args) {
  let obj = this;
  let params = args.slice(1);
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2])
  }
}

let printInfo = printFullName.myBind(myName, "Bangaluru", "India");
printInfo("USA");

*/

/* // ! currying the function using clousers and bind() method
const multiply = function(x, y){
  console.log(x * y);
}


let multiply = fucnction(x) {
  return function() {
    con
  }
}

let muptiplyNumbers = multiply(3);
muptiplyNumbers(10); 
*/

/* // ! debouncing

let count = 0
const getData = () => {
  console.log("Data Fecthed", count++)
}

const debounce = function(fn, delay) {
  let timer;
  return function() {

    * apply() method is ussed to fix the this variable and to achive that this and args are defined to maintain the context and to keep the arguments if it had any, So these are the basic thigs which are requried to check the basic things, the environment or lexical context are correct and the same getData method is called with same arguments.

    let context = this,
        args = arguments;

    ? here clearTimeOut is used to clear the timer if user presses the within the given delay timings
    clearTimeout(timer);

    ? setTimeout => only call getData method when the difference between two api call is greater than delay time
    timer = setTimeout(() => {
      fn.apply(context, arguments)
    }, delay)
  }
}

const betterFunction = debounce(getData, 500);
*/

/* // ! Event delegation

document.querySelector('#form')
  .addEventListener('keypress', (e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
      e.target.value = e.target.value.toUpperCase(); // behaivour pattern.
    }
  })
*/

/* // ! throttling 

let count = 0;
const getData = () => {
  console.log("API call is made", count++);
}

const throttle = (fn, limit) => {
  let flag = true;
  return function() {
    let context = this;
        args = arguments;
    if(flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  }
}

const bettExperience = throttle(getData, 1000);
*/

const container = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "box" }, [
    React.createElement("h1", { id: "heading" }, "Im inside container"),
    React.createElement("h2", { id: "heading" }, "Im inside container"),
  ]),
  React.createElement("div", { id: "box" }, [
    React.createElement("h1", { id: "heading" }, "Im inside container"),
    React.createElement("h2", { id: "heading" }, "Im inside container"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
