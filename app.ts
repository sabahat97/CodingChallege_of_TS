//ex 133 Write a JavaScript object and convert it into a JSON string.

// Explain & TIP:- JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using `JSON.stringify()`.converted javascriot object into JSON object

const person = {
  name: "Lee Min Ho",
  age: 36,
  city: "south korea",
};
const josnString = JSON.stringify(person); //converter into JSON Oject
console.log(josnString);


//ex 134 take  a json strin and parse it into javascript object
const jsonString = `{"name":"jisoo", "age":"30", "city":"southkorea"}`;

const personn = JSON.parse(jsonString);
console.log(personn);


//ex135 :- explain how you can format a JSON string with proper indentation for readabililty

const per = {
  name: "Jisoo",
  age: 30,
  city: "south korea",
};

const jsonStrings = JSON.stringify(per, null, 2);
console.log(jsonStrings);
