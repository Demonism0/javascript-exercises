const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    };
    
    let totalSum = 0;
    let currentNum;
    let endNum;
    if (num1 < num2) {
        currentNum = num1;
        endNum = num2;
    } else {
        currentNum = num2;
        endNum = num1;
    }
    while (currentNum <= endNum) {
        totalSum += currentNum;
        currentNum ++
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
