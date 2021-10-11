const removeFromArray = function(arr, ...rest) {
    return arr.filter((val) => {
        return !rest.includes(val);
    })
};

// Do not edit below this line
module.exports = removeFromArray;
