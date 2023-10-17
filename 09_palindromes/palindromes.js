const palindromes = function(str) {
    const strProcessed = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const strReversed = strProcessed.split('').reverse().join('');
    return strReversed === strProcessed;
};

// const palindromes = function (string) {
//     const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
//     return processedString.split("").reverse().join("") == processedString;
//   };

// Do not edit below this line
module.exports = palindromes;
