const removeFromArray = function() {
    let array = arguments[0];
    for(let i=1; i<arguments.length; i++){
        array = array.filter(element => element !== arguments[i]);
        //filter retains elements that satisfy the condition of the callback
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
