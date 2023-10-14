const reverseString = function(text) {
    let textArray = text.split('');
    let reversedArray = [];
    for (const char of textArray) {
        reversedArray.splice(0, 0, char);
    };
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
