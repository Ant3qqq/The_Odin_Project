const repeatString = function(str,i) {
    let sol = '';
    for(;i>0;i-- ){
        sol += str;
    }
    return sol;
};

module.exports = repeatString;
console.log(repeatString('hey',3));