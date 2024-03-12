const sumAll = function() {
    let start = arguments[0];
    let end = arguments[1];
    let sum = 0;
    const step = 1;
    if(end>start && (start>0 && end>0) && ((typeof start === 'number') && (typeof end === 'number'))) { 
        for (let i = start; i <= end; i += step) {
            sum += i;
        }
    } else if (start>end && (start>0 && end>0) && ((typeof start === 'number') && (typeof end === 'number'))) {
        for (let i = end; i <= start; i += step) {
            sum += i;
        }
    } else if (start<0 || end<0 && ((typeof start !== 'number') && (typeof end !== 'number'))) {
        sum = "ERROR";
    } else if ((typeof start !== 'number') || (typeof end !== 'number')) {
        sum = "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

