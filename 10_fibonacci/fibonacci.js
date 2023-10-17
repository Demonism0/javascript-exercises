const fibonacci = function(num) {
    if (num < 1) {
        return 'OOPS';
    }
    
    let evenResult = 0;
    let oddResult = 1;

    
    for (let i=0; i<num; i++) {
        if (i%2 === 0) {
            oddResult += evenResult;
            console.log(oddResult)
        } else {
            evenResult += oddResult;
            console.log(evenResult)
        }
    }
    if (num % 2 === 0) {
        return evenResult;
    }
    return oddResult;

};

// Do not edit below this line
module.exports = fibonacci;
