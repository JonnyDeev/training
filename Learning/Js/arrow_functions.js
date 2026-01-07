// regular function with arguments
function add(a, b) {
  return a + b;
}
console.log(add(2, 2));

const add_arrow = (a, b) => a + b;

console.log(add_arrow(5, 5));

const explicit_af = (a, b) => {
  return a * b;
};
const implicit_af = (a, b) => a + b;

console.log(explicit_af(3, 2));
console.log(implicit_af(1, 4));

// self invoked function
(function () {
  console.log("self invoked function");
})();
  // arrow function self invoked
  (() => {
    console.log("self invoked arrow function");
  }
)();

// DO NOT USE ARROW FUNCTION ON METHODS OR CONSTRUCTORS.
// AVOID FUNCTION ARROWS WHEN THEY BECOME HARDER TO READ THAN REGULAR FUNCTIONS
