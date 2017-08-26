'use strict';

const b1 = Buffer.from([50, 51, 52, 53, 54, 55]);
const b2 = Buffer.from([56, 57, 58]);
const b3 = Buffer.alloc(10).fill('A');

const buffer = Buffer.concat([b1, b2, b3]);

console.log(buffer);
console.log(buffer.toString());
