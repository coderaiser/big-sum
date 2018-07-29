'use strict';

const bigWrap = require('big-wrap');
const {max} = Math;

const sum = (a, b) => (a || 0) + (b || 0);

const rawSum = (a, b) => {
    check(a, b);
    
    let aI = a.length - 1;
    let bI = b.length - 1;
    let i = max(aI, bI) + 2;
    
    const result = [];
    
    while (--i) {
        const full = sum(a[aI--], b[bI--]);
        result.unshift(full);
    }
    
    return result;
}

module.exports = (a, b) => {
    check(a, b);
    
    if (typeof BigInt !== 'undefined')
        return bigIntSum(a ,b);
    
    const result = rawSum(a, b);
    return bigWrap(result);
};

module.exports.rawSum = rawSum;

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

