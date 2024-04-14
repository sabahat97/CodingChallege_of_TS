//ex:127:- function return used arrow function
const traditionalfunction = function (a, b) {
    return a + b;
};
const arrowfunction = (a, b) => a + b;
console.log(traditionalfunction(2, 8)); //output 10
console.log(arrowfunction(2, 8)); //output 10
//ex 128
const multiplyParamters = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParamters(2, 3, 4)); //output24
//ex 129:-demonstrating 'this in traditional vs. arrow function
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalfunction: function () {
        console.log("traditional functon:", this.value);
    },
    arrowfunction: () => {
        console.log("arrow function:"), this.value;
        ;
    },
};
traditionalVsArrow.traditionalfunction();
traditionalVsArrow.arrowfunction(); //undefined , depending on the outer scops 'this.value 
export {};
//tis code is snippet illustrates the difference in how 'thos is determine in traditiol function versus arrow function
