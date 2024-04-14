//ex 133 converted javascriot object into JSON object 
var person = {
    name: "Jisoo",
    age: 30,
    city: "south korea"
};
var josnString = JSON.stringify(person); //convertec into JSON Oject
console.log(josnString);
//ex 134 take  a json strin and parse it into javascriot object
var jsonString = "{\"name\":\"jisoo\", \"age\":\"30\", \"city\":\"southkorea\"}";
var personn = JSON.parse(josnString);
console.log(personn);
//ex135 explain how you can format a JSON string with proper indentation for readabililty
var per = {
    name: "Jisoo",
    age: 30,
    city: "south korea"
};
var jsonStrings = JSON.stringify(per, null, 2);
console.log(jsonStrings);
