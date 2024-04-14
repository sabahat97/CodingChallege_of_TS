//ex 133 converted javascriot object into JSON object

const person = {
  name: "Jisoo",
  age: 30,
  city: "south korea",
};
const josnString = JSON.stringify(person); //converter into JSON Oject
console.log(josnString);


//ex 134 take  a json strin and parse it into javascript object
const jsonString = `{"name":"jisoo", "age":"30", "city":"southkorea"}`;

const personn = JSON.parse(josnString);
console.log(personn);


//ex135 :- explain how you can format a JSON string with proper indentation for readabililty

const per = {
  name: "Jisoo",
  age: 30,
  city: "south korea",
};

const jsonStrings = JSON.stringify(per, null, 2);
console.log(jsonStrings);
