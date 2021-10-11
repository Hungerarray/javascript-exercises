const repeatString = function(msg, rept) {
    if (rept < 0)
        return "ERROR";
    
    let ret = "";
    for (let i = 0; i < rept; ++i)
        ret += msg;
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
