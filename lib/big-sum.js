'use strict';

const {max} = Math;

const sum = (a, b) => (a || 0) + (b || 0);

module.exports = (a, b) => {
    check(a, b);
    
    if (typeof BigInt !== 'undefined')
        return bigIntSum(a ,b);
    
    const aI = a.length;
    const bI = b.length;
    
    let n = max(aI, bI) + 1;
    let next = 0;
    let i = 0;
    
    const result = [];
    
    while (--n) {
        const full = sum(a.pop(), b.pop());
        result.push(next);
        
        const mod = full % 10;
        next = Math.floor(full / 10);
        
        result[i] += mod;
        ++i;
    }
    
    return result.reverse();
};

const bigIntSum = (a, b) => {
    const bigA = BigInt(a.join(''));
    const bigB = BigInt(b.join(''));
    
    return String(bigA + bigB)
        .split('')
        .map(Number);
};

function check(a, b) {
    if (!Array.isArray(a))
        throw Error('a should be an array!');
    
    if (!Array.isArray(b))
        throw Error('b should be an array!');
}

