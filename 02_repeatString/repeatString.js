const repeatString = function(string, repitition) {
    
    if (repitition > 0) {
        for (let i = 0; i<repitition; i++) {
            const repeatedString = string.repeat(repitition);
            return repeatedString;
        }
    } else if (repitition < 0) {
        return 'ERROR';
    } else if (repitition == 0) {
        return '';
    }  
};

// Do not edit below this line
module.exports = repeatString;
