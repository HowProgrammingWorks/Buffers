'use strict';

const b1 = Buffer.from([1, 2, 3, 4, 5, 6]);

console.log(b1);

const b2 = Buffer.from('Marcus Aurelius (Марк Аврелий)');

console.log(`hex:    ${b2.toString('hex')}`);
console.log(`base64: ${b2.toString('base64')}`);
console.log(`utf-8:  ${b2.toString('utf8')}`);
console.log(`binary: ${b2.toString('binary')}`);
console.log(`ascii:  ${b2.toString('ascii')}`);
