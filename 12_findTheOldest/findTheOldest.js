const findTheOldest = function(arr) {
    const sorted = arr.sort(function(a,b) {
        const d = new Date();
        let currentYear = d.getFullYear();
        let aAge;
        let bAge;
        if (a.yearOfDeath) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        } else {
            aAge = currentYear - a.yearOfBirth;
        }
        if (b.yearOfDeath) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else {
            bAge = currentYear - b.yearOfBirth;
        }
        
        if (aAge > bAge) {
            return 1;
        } else if (aAge < bAge) {
            return -1;
        } else {
            return 0;
        }
    })
    return sorted[sorted.length -1];
};

// Do not edit below this line
module.exports = findTheOldest;
