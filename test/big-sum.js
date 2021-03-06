'use strict';

const test = require('tape');
const mockRequire = require('mock-require');
const sum = require('..');
const {rawSum} = sum;

test('sum: 1 char', (t) => {
    const result = sum([1], [2]);
    const expect = [3];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('sum: 2 chars', (t) => {
    const result = sum([1, 2], [2, 3]);
    const expect = [3, 5];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('sum: 3 chars', (t) => {
    const result = sum([1, 2, 3], [2, 3, 4]);
    const expect = [3, 5, 7];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('sum: no args', (t) => {
    t.throws(sum, /a should be an array!/, 'should throw when no args');
    t.end();
});

test('sum: no b', (t) => {
    const fn = () => sum([]);
    t.throws(fn, /b should be an array!/, 'should throw when no args');
    t.end();
});

test('sum: 3 chars: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    const sum = mockRequire.reRequire('..');
    const result = sum([1, 2, 3], [2, 3, 4]);
    const expect = [3, 5, 7];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('sum: 10 chars: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    
    const sum = mockRequire.reRequire('..');
    
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const result = sum(a, b);
    const expect = [2, 4, 6, 9, 1, 3, 5, 7, 8];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('sum: different digits count: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    
    const sum = mockRequire.reRequire('..');
    
    const a = [1];
    const b = [1, 2];
    
    const result = sum(a, b);
    const expect = [1, 3];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('sum: different digits count: more and less: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    
    const sum = mockRequire.reRequire('..');
    
    const a = [1, 2];
    const b = [1];
    
    const result = sum(a, b);
    const expect = [1, 3];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('sum: do not change args', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    
    const sum = mockRequire.reRequire('..');
    
    const a = [1, 2];
    const b = [1];
    const expect = [1, 2];
    
    sum(a, b);
    
    t.deepEqual(a, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('sum: rawSum: no overflow', (t) => {
    const a = [1, 2];
    const b = [1];
    const expect = [1, 3];
    
    const result = rawSum(a, b);
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('sum: rawSum: no overflow', (t) => {
    const a = [1, 9];
    const b = [1, 9];
    const expect = [2, 18];
    
    const result = rawSum(a, b);
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('sum: rawSum: no args', (t) => {
    t.throws(rawSum, /a should be an array!/, 'should throw');
    t.end();
});

