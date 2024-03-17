const fibonacci = function() {
    let input = arguments[0];
    let fibonacciSet = [];
    let fibonacciElement = 0;
    //need to have an array to push and access previous element
    if(input == 0) {
        return 0;
    } else if (input !== 0 && input> 0) {
        for(let i = 0; i<input; i++) {
            if (i == 0 || i == 1) {
            fibonacciElement = 1
            fibonacciSet.push(fibonacciElement);
            } else {
            fibonacciElement = fibonacciSet[i-2] + fibonacciSet[i-1];
            fibonacciSet.push(fibonacciElement);
            }
        }
        return fibonacciElement;
    } else if (input !== 0 && input<0) {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
