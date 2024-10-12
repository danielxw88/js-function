function greet(name="Daniel") {
    return console.log("Hello "+name);// return greeting here
}
greet("George");
greet();

function addNumbers(num1, num2) {
    return console.log(num1+num2);// return sum here
}
addNumbers(5,7);

let x = 10;
 
function changeValue() {
    let x=5;
    return x;// declare a new x locally here
}
console.log("Gloabal varianble x equals "+x);
console.log("Local variable x equals "+changeValue());

function outerFunction() {
    let count = 0;
    return function() {
        count+=1;// update count here
        return count;
    };
}
const updateCount=outerFunction();
console.log("outerFunction output: "+updateCount());
console.log("outerFunction output: "+updateCount());
console.log("outerFunction output: "+updateCount());
