const removeFromArray = function(anArray, ...items) {
    for (let item of items) {
        let i=0;
        while (i < anArray.length) {
            if (anArray[i] === item) {
                anArray.splice(i,1);
            } else {
                i++;
            };
        };
    };
    return anArray;
};

// Do not edit below this line
module.exports = removeFromArray;
