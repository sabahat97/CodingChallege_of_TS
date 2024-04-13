//ex 124:- make a returning function method and a object of the method and return property name;

const person = {
  name: "Lee Min Ho",
  age: "36",
  artist: "Actor",
  getName: function () {
    return this.name;
  },
};
console.log(person.getName()); //output Lee Min Ho



//ex 125 :- make a same object method with a multiple property of length and width
const caluArea = {
  length: 5,
  width: 4,
  multiple: function () {
    return this.length * this.width;
  },
};
console.log(caluArea.multiple()); // output 20

//ex 126 :- demonstrates "this" behavior change in a nested function
const myObject = {
  property: "value",
  outerMethod: function () {
    console.log(this.property); // works as expected, logs "value"

    const innerMethod = () => {
      console.log(this.property); // still accesses myObject "property"
    };
    innerMethod();
  },
};
myObject.outerMethod(); //this example shows that usin an arrow function for the inner method preserves the "this" context from the outer method.
